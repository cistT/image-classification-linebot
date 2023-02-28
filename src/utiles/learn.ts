import { MODEL_PATH } from "@/consts/ai";
import * as tf from "@tensorflow/tfjs-node";
import path from "path";

export const AI_LABELS = [
  "アメリカンミンク",
  "アリゲーターガー",
  "ウグイ",
  "カイツブリ",
  "ギンブナ",
  "ニジマスアルビノ",
  "ピラニア",
  "ポルカドットスティングレイ",
  "桜錦",
];

export const learn = async (originalImage: Buffer) => {
  const model = await tf.loadLayersModel(MODEL_PATH);

  const confidencesTensor = tf.tidy(() => {
    const image = tf.node.decodeImage(originalImage, 3);
    const [imgHeight, imgWidth] = image.shape.slice(0, 2);
    // convert image to from 0 to 255 -> -1 to 1
    const normalizedImage = tf.div(image, tf.scalar(127.5));
    const shiftedImage = tf.sub(normalizedImage, tf.scalar(1));
    // make into a batch of 1 so it is shaped [1, height, width, 3]
    const reshapedImage: tf.Tensor4D = shiftedImage.reshape([
      1,
      ...shiftedImage.shape,
    ]);
    // center crop and resize
    let top = 0;
    let left = 0;
    let bottom = 1;
    let right = 1;
    if (imgHeight != imgWidth) {
      // the crops are normalized 0-1 percentage of the image dimension
      const size = Math.min(imgHeight, imgWidth);
      left = (imgWidth - size) / 2 / imgWidth;
      top = (imgHeight - size) / 2 / imgHeight;
      right = (imgWidth + size) / 2 / imgWidth;
      bottom = (imgHeight + size) / 2 / imgHeight;
    }
    const croppedImage = tf.image.cropAndResize(
      reshapedImage,
      [[top, left, bottom, right]],
      [0],
      [224, 224]
    );
    const result = model.predict(croppedImage);
    return result;
  }) as tf.Tensor | undefined;
  model.dispose();
  if (!confidencesTensor) {
    return null;
  }
  const result = await confidencesTensor.data();
  const data = AI_LABELS.map((label, i) => ({
    name: label,
    confidence: result[i],
  }));

  return data.filter((data) => data.confidence > 0.8)[0] || null;
};

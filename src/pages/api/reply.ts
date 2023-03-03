import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
// import { WebhookRequestBody } from "@line/bot-sdk";
// import { Middleware } from "@line/bot-sdk/lib/middleware";
// import * as line from "@/config/lineBot";
// import { eventType, messageType, mode } from "@/consts/linebot";
// import { registerImageToGoogleDrive } from "@/config/googleDrive";
// import { AI_LABELS, learn } from "@/utiles/learn";
// import { streamToBuffer } from "@jorgeferrero/stream-to-buffer";
// import {
//   createCreatureTemplateColumn,
//   createRichMenu,
//   replyCarouselTemplate,
//   replyTextMessage,
// } from "@/utiles/lineBotMessage";
// import { GOOGLE_DRIVE_STORAGE_LOCATION } from "@/consts/googleDrive";
// import {
//   createCreature,
//   createUser,
//   getUserData,
//   updateCreature,
// } from "@/utiles/creatureModel";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// async function runMiddleware(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: Middleware
// ) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) =>
//       result instanceof Error ? reject(result) : resolve(result)
//     );
//   });
// }

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // if (req.method !== "POST") {
  //   return;
  // }
  // await runMiddleware(req, res, line.middleware);
  // const body: WebhookRequestBody = req.body;
  // body.events.map(async (event) => {
  //   const userID = event.source.userId;
  //   if (!userID) {
  //     return;
  //   }
  //   if (event.mode === mode.ACTIVE) {
  //     switch (event.type) {
  //       case eventType.FOLLOW: {
  //         await replyTextMessage(event.replyToken, "フォローありがとう!");
  //         await createUser(userID);
  //         AI_LABELS.forEach(async (label) => {
  //           if (!userID) {
  //             return;
  //           }
  //           await createCreature(label, userID);
  //         });
  //         break;
  //       }
  //       case eventType.MESSAGE: {
  //         if (event.message.type === messageType.TEXT) {
  //           const userData = await getUserData(userID);
  //           if (!userData?.creature) {
  //             break;
  //           }
  //           if (event.message.text === "保存した画像を見る") {
  //             const templateColumns = userData.creature
  //               .filter((data) => data.imageURL !== "")
  //               .map((data) =>
  //                 createCreatureTemplateColumn(
  //                   data.imageURL,
  //                   data.name,
  //                   `${data.name}です!`
  //                 )
  //               )
  //               .slice(0, 10);
  //             await replyCarouselTemplate(
  //               event.replyToken,
  //               "生き物一覧",
  //               templateColumns
  //             );
  //           }
  //           break;
  //         }
  //         //   if (event.message.type === messageType.IMAGE) {
  //         //     //ユーザから送られてきた画像が、どの生き物なのかを判別
  //         //     const forLearningImage = await line.client.getMessageContent(
  //         //       event.message.id
  //         //     );
  //         //     const learnedResult = await learn(
  //         //       await streamToBuffer(forLearningImage)
  //         //     );
  //         //     if (!learnedResult) {
  //         //       await replyTextMessage(
  //         //         event.replyToken,
  //         //         "もう一度撮影してください"
  //         //       );
  //         //       break;
  //         //     }
  //         //     //ユーザが撮影した生き物の名前を、ユーザに送信
  //         //     await replyTextMessage(
  //         //       event.replyToken,
  //         //       `これは、${learnedResult.name}です!`
  //         //     );
  //         //     //判別ができたら、GoogleDriveに保存
  //         //     const image = await line.client.getMessageContent(event.message.id);
  //         //     //idは、画像が保存されているURLを参照するのに必要
  //         //     const id = await registerImageToGoogleDrive(
  //         //       image,
  //         //       event.message.id
  //         //     );
  //         //     if (!id) {
  //         //       await replyTextMessage(
  //         //         event.replyToken,
  //         //         "うまく保存できませんでした"
  //         //       );
  //         //       break;
  //         //     }
  //         //     //DBにユーザが撮影した生き物を保存
  //         //     await updateCreature(
  //         //       userID,
  //         //       learnedResult.name,
  //         //       GOOGLE_DRIVE_STORAGE_LOCATION(id)
  //         //     );
  //         //   }
  //         break;
  //       }
  //     }
  //   }
  // });
};

export default handler;

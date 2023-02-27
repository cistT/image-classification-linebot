// import { client } from "@/config/lineBot";
// import { NextApiRequest, NextApiResponse } from "next";
// import { loadGraphModel } from "@tensorflow/tfjs-converter";
// import * as tf from "@tensorflow/tfjs-node";
// import path, { dirname } from "path";
// import { promises as fs } from "fs";
// import { learn } from "@/utiles/learn";


// const AI_LABELS = [
//     "アメリカンミンク",
//     "アリゲーターガー",
//     "ウグイ",
//     "エイ",
//     "カイツブリ",
//     "ギンザゲ",
//     "ギンブナ",
//     "サケ",
//     "サケ卵",
//     "サンショウウオ",
//     "シルバーシャーク",
//     "ニジマスアルビノ",
//     "ピラニア",
//     "ベニサケ",
//     "錦鯉",
// ];

// const handler = async (_: NextApiRequest, res: NextApiResponse) => {
//     const i = await fs.readFile("public/mink.jpeg");

//     const data = await learn(i);
//     const name = data?.name ?? "miss";

//     res.status(200).json({
//         message: name,
//     });
// };

// export default handler;

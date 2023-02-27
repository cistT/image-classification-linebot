import { client } from "@/config/lineBot";
import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
const handler = async (_: NextApiRequest, res: NextApiResponse) => {
    const data = await client.broadcast({
        type: "text",
        text: "teeeesttt",
    });

    res.status(200).json({ message: "test" });
};

export default handler;

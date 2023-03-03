import { client } from "@/config/lineBot";
import { getUserData } from "@/utiles/creatureModel";
import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  const fetchedUserData = await getUserData(id);
  if (!fetchedUserData) {
    return res.status(200).json({ creatures: [] });
  }

  res.status(200).json({ creatures: fetchedUserData.creature });
};

export default handler;

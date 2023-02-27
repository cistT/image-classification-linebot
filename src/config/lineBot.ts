import { clientConfigSetting } from "@/consts/linebot";
import {
    ClientConfig,
    Client,
    middleware as lineMiddleware,
    MiddlewareConfig,
} from "@line/bot-sdk";

const clientConfig: ClientConfig = {
    channelAccessToken: clientConfigSetting.ACCESS_TOKEN,
    channelSecret: clientConfigSetting.CHANNEL_SECRET,
};
const middlewareConfig: MiddlewareConfig = {
    channelAccessToken: clientConfigSetting.ACCESS_TOKEN,
    channelSecret: clientConfigSetting.CHANNEL_SECRET,
};

export const client = new Client(clientConfig);
export const middleware = lineMiddleware(middlewareConfig);

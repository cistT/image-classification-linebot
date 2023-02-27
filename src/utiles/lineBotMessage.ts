import * as line from "@/config/lineBot";
import { TemplateColumn, TemplateContent } from "@line/bot-sdk";

export const replyTextMessage = async (
    replyToken: string,
    textMessage: string
) => {
    await line.client.replyMessage(replyToken, {
        type: "text",
        text: textMessage,
    });
};

export const createCreatureTemplateColumn = (
    imageURL: string,
    creatureName: string,
    text: string
): TemplateColumn => {
    return {
        thumbnailImageUrl: imageURL,
        title: creatureName,
        text: `${text}`,
        actions: [{ type: "uri", label: "画像リンク先に遷移", uri: imageURL }],
    };
};

export const replyCarouselTemplate = async (
    replyToken: string,
    altText: string,
    templateColumns: TemplateColumn[]
) => {
    await line.client.replyMessage(replyToken, {
        type: "template",
        altText: altText,
        template: {
            type: "carousel",
            columns: templateColumns,
        },
    });
};

export const carouselTemplatea = async (
    replyToken: string,
    imageUrl: string
) => {
    await line.client.replyMessage(replyToken, {
        type: "image",
        originalContentUrl: imageUrl,
        previewImageUrl: imageUrl,
    });
};

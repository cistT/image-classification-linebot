export const clientConfigSetting = {
    ACCESS_TOKEN: process.env.NEXT_PUBLIC_LINE_ACCESS_TOKEN! as string,
    CHANNEL_SECRET: process.env.NEXT_PUBLIC_LINE_CHANNEL_SECRET! as string,
} as const;

export const mode = {
    ACTIVE: "active" as const,
} as const;

export const eventType = {
    FOLLOW: "follow" as const,
    MESSAGE: "message" as const,
} as const;

export const messageType = {
    TEXT: "text" as const,
    IMAGE: "image" as const,
} as const;

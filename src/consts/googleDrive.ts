export const jwtSetting = {
    CLIENT_EMAIL: process.env.NEXT_PUBLIC_CLIENT_EMAIL as string,
    PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
} as const;

export const scopes = {
    DRIVE: "https://www.googleapis.com/auth/drive" as const,
};

export const FOLDER_ID = "175oMzwdvzOmfwU8KonnpwvheiQNiV9zE" as const;

export const GOOGLE_DRIVE_STORAGE_LOCATION = (id: string) => {
    return `https://drive.google.com/uc?export=view&id=${id}`;
};

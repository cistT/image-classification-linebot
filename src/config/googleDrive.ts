import { FOLDER_ID, jwtSetting, scopes } from "@/consts/googleDrive";
import { google } from "googleapis";
import internal from "stream";

const settingGoogleDriveAPI = async () => {
    const jwtClient = new google.auth.JWT(
        jwtSetting.CLIENT_EMAIL,
        undefined,
        jwtSetting.PRIVATE_KEY,
        [scopes.DRIVE]
    );
    jwtClient.authorize();
    return jwtClient;
};

export const registerImageToGoogleDrive = async (
    imageStream: internal.Readable,
    fileName: string
) => {
    const jwtClient = await settingGoogleDriveAPI();

    const fileMetadata = {
        name: `${fileName}.jpeg`,
        parents: [FOLDER_ID],
    };

    const media = {
        mimeType: "image/jpeg",
        body: imageStream,
    };

    const drive = google.drive({ version: "v3", auth: jwtClient });

    const res = await drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: "id",
    });

    return res.data.id;
};

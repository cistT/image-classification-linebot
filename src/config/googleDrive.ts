import { FOLDER_ID, jwtSetting, scopes } from "@/consts/googleDrive";
import { google } from "googleapis";
import internal from "stream";

// const CLIENT_EMAIL = "bingoapp@magnetic-flare-378807.iam.gserviceaccount.com";
// const PRIVATE_KEY =
//     "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqEVDfQPmzPlsw\nrkxm5YcEnvp+9iBLWKz+239Peoc5ltYCdtFc+QsI9QTovx4E+YfutjLgkY11TNk+\nFINcgcZzN5PAPCzgyn2+y9i4rPhd8sU4Qfb4oI/RHW5AF9Nk0R7X/3ITfbZfbQFz\nAVQLvzQJW+5F3uVK95G+8EOC8eQJeXBOu7SB0yUwQmtRedaNWtL1GDA7GCZbAfZS\ne4a1v+IXD+I3AAe0t5bf595aMwo5iS85CeGxEsoxy2zEnBE5ec23OfvCuMKQDJBD\n4VDONSlyzWiafoRkE+93mhuGK+5ZlEz4ipuLeIECg4gXYPsfq8lc+aTTRa0encjo\nfYkcpR5bAgMBAAECggEABctrPwAewe24+7KkpcjiTdUA4fyO4yJVWqWt885P9zVd\ne14DCjDuIFMA5NFGO5Mo/4gzuZUcBcglisj2JNvDID/fh+hE+y/LEwotCzXRjJnu\nAFm3CYem/tAK5qIpMMEzVNa+U02wPhYfu4RrEa9lHYCFYNoUY/aFf8T99+M4Ct6L\nH61ZnT5f3b5+QOFmO+vfIfhZDiQnXSHQ8Pu54tzG4LZOLF31xmuhibzO/k8cOiTo\nqxT9D09qu/82Lo9ICG6kysxs+mX5emqc4nBOU+5O+76s5GhVy1S7IS4TuozaqGAe\nlrTOUy1iTOxtuImfzwGuJqqAAZHl6d34oQg0DVeImQKBgQDkAsU8fHFkS3unK7/I\nm79Dv3185zXbIksJNG0IlMHFHv+LbpDUnQCIgJv3xJHupba5a+nMDCdj71r5g0GF\nyvxGFgsd+RRmMoOcc4zUKgsty6NKwvxd762FLzGA5zSWe77NMnZw9lzAY3ODNja3\nbOh6oUo1ZM5Rfn6Km1mmFYs6DwKBgQC+8a8DIXiOF8B2CDA9QUXqBouQiNNVDFOi\n2eGujkl2yzePdGKSjCWT4+ZbZKoaZt23fkokg4Dj3KQ/sRQV1vfURpbfwbyt8nJy\nmqehajIh8B4Bg+gpA9/FNKqI5NUKdJ3JR899s4W+Sw9B37/zJVnRKIW+EbrxQ0YN\nAQkqRhaS9QKBgAV5447OVlLYVUHwlQyWYQOZh8QGMY7vxemUrsG0AOthETYiE6xn\nkOm2XQiYWgDnTfoqE1VpPVDzILY5Zst10pVEVkQEBW9m6y5IwCsgT2BsMaHMCQ+g\ngARg28mCxAqRMkXvXlTcNeIRAWc3WB0Tqom3cfbSUvo2FYfyrzaD8fIVAoGAbYo+\n6Z/hBjswCUaHTgzNLAWXOVKVUlwg+vLd2oL8OC8674xIJGRMBnyeoV2tjDnpBiRo\nKmxam93vSC6xJBpP0LKySSlesbe92mtIsXw3yGp0/E+M90Kms/6Turb0VOwzvM36\nhdVga5up5BOVjcqmrSv/FdwcD96VKE6o0FynBKUCgYEAweJ4MOxG0tpTajLzSfj+\nB0T4Y8EiyrUfxBpB30/e1NGmYm2dchAjB0z3mFr77sKArfXLEOBemeoxQY7nz7iZ\nR9uEBQzyZJxDR+D5xRVaKq2vjo08Bai65PWufLkiEnb2QvjDHFnO/X6mB03ZSp8c\nJ+rfJ4kJhqTSrbD0/8XNofk=\n-----END PRIVATE KEY-----\n";

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

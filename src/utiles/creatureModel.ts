import { prisma } from "@/config/prisma";

export const createUser = async (userID: string) => {
    const user = await prisma.user.create({
        data: {
            id: userID,
        },
    });
    return user;
};

export const createCreature = async (creatureName: string, userID: string) => {
    const creature = await prisma.creature.create({
        data: {
            name: creatureName,
            userID: userID,
        },
    });
    return creature;
};

export const getUserData = async (userID: string) => {
    const userData = await prisma.user.findUnique({
        include: {
            creature: true,
        },
        where: {
            id: userID,
        },
    });
    return userData;
};

export const updateCreature = async (
    userID: string,
    creatureName: string,
    creatureImageURL: string
) => {
    const updatedCreature = await prisma.creature.upsert({
        where: {
            userID_name: {
                userID: userID,
                name: creatureName,
            },
        },
        update: {
            imageURL: creatureImageURL,
        },
        create: {
            userID: userID,
            name: creatureName,
            imageURL: creatureImageURL,
        },
    });
    return updateCreature;
};

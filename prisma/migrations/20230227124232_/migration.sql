-- CreateTable
CREATE TABLE "Creature" (
    "name" TEXT NOT NULL DEFAULT '',
    "imageURL" TEXT NOT NULL DEFAULT '',
    "userID" TEXT NOT NULL,

    CONSTRAINT "Creature_pkey" PRIMARY KEY ("userID","name")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Creature" ADD CONSTRAINT "Creature_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

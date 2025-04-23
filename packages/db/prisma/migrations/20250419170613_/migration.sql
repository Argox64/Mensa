/*
  Warnings:

  - You are about to drop the column `trackingId` on the `ShoppingAffiliation` table. All the data in the column will be lost.
  - Added the required column `trackingUrl` to the `ShoppingAffiliation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShoppingAffiliation" DROP COLUMN "trackingId",
ADD COLUMN     "trackingUrl" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

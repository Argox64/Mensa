/*
  Warnings:

  - You are about to drop the column `billingCycle` on the `Plans` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Plans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Plans" DROP COLUMN "billingCycle",
DROP COLUMN "price",
ADD COLUMN     "monthlyPrice" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "yearlyPrice" INTEGER NOT NULL DEFAULT 0;

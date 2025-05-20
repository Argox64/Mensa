/*
  Warnings:

  - You are about to drop the column `stripeSubscriptionId` on the `Subscriptions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Subscriptions_stripeSubscriptionId_key";

-- AlterTable
ALTER TABLE "Subscriptions" DROP COLUMN "stripeSubscriptionId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stripeCustomerId" UUID;

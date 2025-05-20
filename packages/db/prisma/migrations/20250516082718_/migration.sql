/*
  Warnings:

  - You are about to drop the column `endDate` on the `Subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `nextBillingDate` on the `Subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Subscriptions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Subscriptions_status_idx";

-- AlterTable
ALTER TABLE "Subscriptions" DROP COLUMN "endDate",
DROP COLUMN "nextBillingDate",
DROP COLUMN "status";

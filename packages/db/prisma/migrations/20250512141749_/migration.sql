/*
  Warnings:

  - Added the required column `description` to the `Plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plans" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "features" TEXT[];

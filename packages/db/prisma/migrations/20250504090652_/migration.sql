/*
  Warnings:

  - Made the column `content` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PlanningEntry" ALTER COLUMN "date" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "content" SET NOT NULL;

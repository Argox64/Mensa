-- AlterTable
ALTER TABLE "PlanningEntry" ADD COLUMN     "mealType" TEXT NOT NULL DEFAULT '';

CREATE EXTENSION IF NOT EXISTS unaccent;

-- Create a function to unaccent and convert text to tsvector
CREATE OR REPLACE FUNCTION public.unaccent_tsvector(text)
RETURNS tsvector AS
$$
SELECT to_tsvector('french', unaccent($1));
$$ LANGUAGE sql IMMUTABLE;

-- Create a GIN index on the name column of the Recipe table for full-text search
CREATE INDEX recipe_title_fts_idx
ON "Recipe"
USING GIN (unaccent_tsvector(name));

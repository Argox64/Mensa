-- AlterTable
ALTER TABLE "PlanningEntry" ADD COLUMN     "mealType" TEXT NOT NULL DEFAULT '';

CREATE OR REPLACE FUNCTION public.unaccent_tsvector(text)
RETURNS tsvector AS
$$
SELECT to_tsvector('french', unaccent($1));
$$ LANGUAGE sql IMMUTABLE;

CREATE INDEX recipe_title_fts_idx
ON "Recipe"
USING GIN (unaccent_tsvector(name));


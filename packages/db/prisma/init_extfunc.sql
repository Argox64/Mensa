--CREATE EXTENSION IF NOT EXISTS unaccent;
--CREATE EXTENSION IF NOT EXISTS pg_trgm; // need to be install with SUPABASE portal, not in script !

-- Create a function to unaccent and convert text to tsvector
CREATE OR REPLACE FUNCTION public.unaccent_tsvector(text)
RETURNS tsvector AS
$$
SELECT to_tsvector('french', extensions.unaccent($1));
$$ LANGUAGE sql IMMUTABLE;

-- Create a GIN index on the name column of the Recipe table for full-text search
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_indexes
    WHERE schemaname = 'public'
    AND indexname = 'recipe_title_fts_idx'
  ) THEN
    CREATE INDEX recipe_title_fts_idx
    ON "Recipe"
    USING GIN (public.unaccent_tsvector(name));
  END IF;
END$$;

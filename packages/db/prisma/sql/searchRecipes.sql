-- @param {String} $1:searchTerm? The search term (optional)
-- @param {Int} $2:skip Number of rows to skip (offset)
-- @param {Int} $3:limit Maximum number of rows to return
SELECT *,
  ts_rank(to_tsvector('french', name), plainto_tsquery('french', $1)) AS rank,
  similarity(name, $1) AS fuzzy
FROM "Recipe"
WHERE 
   ($1 = '' OR to_tsvector('french', name) @@ plainto_tsquery('french', $1) OR name % $1)
ORDER BY rank DESC, fuzzy DESC -- On peut imaginer ici un tri par pondération plutot => 
--(ts_rank(to_tsvector('french', name), plainto_tsquery('french', $1)) * 0.7 + similarity(name, $1) * 0.3) AS score
OFFSET $2
LIMIT $3;
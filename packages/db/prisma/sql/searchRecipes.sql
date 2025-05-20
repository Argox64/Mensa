-- @param {String} $1:searchTerm? The search term (optional)
-- @param {Int} $2:skip Number of rows to skip (offset)
-- @param {Int} $3:limit Maximum number of rows to return
SELECT 
  r.*,
  json_build_object(
    'id', u.id,
    'userName', u.username
  ) AS user,
  ts_rank(to_tsvector('french', r.name), plainto_tsquery('french', $1)) AS rank,
  similarity(r.name, $1) AS fuzzy
FROM "Recipe" r
JOIN "User" u ON r."creatorId" = u.id
WHERE 
  ($1 = '' OR to_tsvector('french', r.name) @@ plainto_tsquery('french', $1) OR r.name % $1)
ORDER BY 
  rank DESC, 
  fuzzy DESC
OFFSET $2
LIMIT $3;

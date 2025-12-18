const q8 = `
SELECT 
    t.name AS "Nom du type", 
    COUNT(pt.pokemon_id) AS "Nombre de pokemon", 
    SUM(CASE WHEN pt.slot = 1 THEN 1 ELSE 0 END) AS "Nombre de pokemon avec le type slot 1", 
    SUM(CASE WHEN pt.slot = 2 THEN 1 ELSE 0 END) AS "Nombre de pokemon avec le type slot 2"
FROM type t
JOIN pokemon_type pt ON t.type_id = pt.type_id
GROUP BY t.type_id, t.name
ORDER BY "Nombre de pokemon" DESC, "Nombre de pokemon avec le type slot 1" DESC
`;

module.exports = q8;

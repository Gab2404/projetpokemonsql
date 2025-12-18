const q16 = `
SELECT 
    a.name AS "Talent",
    COUNT(pa.pokemon_id) AS "Nombre possédant le talent",
    (SELECT t.name 
     FROM pokemon_ability pa2 
     JOIN pokemon_type pt ON pa2.pokemon_id = pt.pokemon_id 
     JOIN type t ON pt.type_id = t.type_id 
     WHERE pa2.ability_id = a.ability_id 
     GROUP BY t.type_id 
     ORDER BY COUNT(*) DESC 
     LIMIT 1) AS "Type possédant le plus le talent",
    ROUND(COUNT(pa.pokemon_id) * 100.0 / (SELECT COUNT(*) FROM pokemon), 2) AS "Pourcentage possession",
    ROUND(SUM(CASE WHEN pa.is_hidden = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(pa.pokemon_id), 2) AS "Pourcentage possession cachée",
    ROUND(COUNT(pa.pokemon_id) * 100.0 / (
        SELECT COUNT(pa3.pokemon_id) 
        FROM ability a3 
        JOIN pokemon_ability pa3 ON a3.ability_id = pa3.ability_id 
        GROUP BY a3.ability_id 
        ORDER BY COUNT(pa3.pokemon_id) DESC 
        LIMIT 1
    ), 2) AS "Pourcentage par rapport au talent le plus possédé"
FROM ability a
JOIN pokemon_ability pa ON a.ability_id = pa.ability_id
GROUP BY a.ability_id, a.name
ORDER BY a.name ASC
`;

module.exports = q16;

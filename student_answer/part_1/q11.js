const q11 = `
SELECT 
    p.name AS "Pokemon", 
    COUNT(pm.move_id) AS "Nombre de capacités"
FROM pokemon p
JOIN pokemon_move pm ON p.pokemon_id = pm.pokemon_id
GROUP BY p.pokemon_id, p.name
ORDER BY "Nombre de capacités" DESC
LIMIT 1
`;

module.exports = q11;

const q13 = `
SELECT 
    p.name AS "Nom du pokemon", 
    COUNT(pm.move_id) AS "Nombre capacité avec le même type"
FROM pokemon p
JOIN pokemon_move pm ON p.pokemon_id = pm.pokemon_id
JOIN move m ON pm.move_id = m.move_id
JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id AND m.type_id = pt.type_id
GROUP BY p.pokemon_id, p.name
ORDER BY "Nombre capacité avec le même type" DESC, p.name ASC
LIMIT 10
`;

module.exports = q13;

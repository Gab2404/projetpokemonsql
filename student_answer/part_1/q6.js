const q6 = `
SELECT 
    p.pokedex_number AS "N°", 
    p.name AS "Pokemon", 
    a.name AS "Talent", 
    a.description AS "Description talent"
FROM pokemon p
JOIN pokemon_ability pa ON p.pokemon_id = pa.pokemon_id
JOIN ability a ON pa.ability_id = a.ability_id
WHERE a.ability_id IN (
    SELECT ability_id 
    FROM pokemon_ability 
    GROUP BY ability_id 
    HAVING COUNT(*) = 1
)
ORDER BY p.pokedex_number ASC
`;

module.exports = q6;

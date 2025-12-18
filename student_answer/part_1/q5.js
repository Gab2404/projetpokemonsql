const q5 = `
SELECT 
    p.pokedex_number AS "N°", 
    p.name AS "Pokemon"
FROM pokemon p
JOIN pokemon_ability pa ON p.pokemon_id = pa.pokemon_id
JOIN ability a ON pa.ability_id = a.ability_id
WHERE a.name = 'Coloforce'
ORDER BY p.pokedex_number ASC
`;

module.exports = q5;

const q2 = `
SELECT 
    name AS "Pokemon", 
    (height / 10.0) || ' m' AS "Taille", 
    (weight / 10.0) || ' kg' AS "Poids" 
FROM pokemon 
WHERE height = (SELECT height FROM pokemon WHERE pokemon_id = 542) 
ORDER BY weight ASC
`;

module.exports = q2;

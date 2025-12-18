const q9 = `
SELECT 
    t.name AS "Type", 
    m.name AS "Capacité", 
    m.power AS "Puissance", 
    m.accuracy AS "Précision", 
    m.description AS "Description"
FROM move m
JOIN type t ON m.type_id = t.type_id
WHERE m.power > 100 
  AND m.accuracy >= 90 
  AND m.description NOT LIKE '%tour%'
ORDER BY m.power DESC
`;

module.exports = q9;

const q4 = `
SELECT 
    ability_id AS "Id", 
    name AS "Talent", 
    description AS "Description"
FROM ability
WHERE name LIKE '% %' OR name LIKE '%-%'
ORDER BY LENGTH(description)
`;

module.exports = q4;

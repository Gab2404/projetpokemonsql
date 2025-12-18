const q3 = `
SELECT 
    m.name AS "Nom", 
    m.category AS "Catégorie", 
    m.power AS "Puissance", 
    m.pp AS "Point de pouvoir", 
    m.accuracy AS "Précision", 
    m.description AS "Description" 
FROM move m
JOIN type t ON m.type_id = t.type_id
WHERE t.name = 'Roche'
ORDER BY m.category ASC
`;

module.exports = q3;

const q10 = `
SELECT 
    t.name AS "Type",
    (SELECT name FROM move m WHERE m.type_id = t.type_id AND m.power IS NOT NULL ORDER BY m.power DESC LIMIT 1) AS "Meilleure capacité",
    (SELECT power FROM move m WHERE m.type_id = t.type_id AND m.power IS NOT NULL ORDER BY m.power DESC LIMIT 1) AS "Meilleure puissance",
    (SELECT name FROM move m WHERE m.type_id = t.type_id AND m.power IS NOT NULL ORDER BY m.power ASC LIMIT 1) AS "Pire capacité",
    (SELECT power FROM move m WHERE m.type_id = t.type_id AND m.power IS NOT NULL ORDER BY m.power ASC LIMIT 1) AS "Pire puissance"
FROM type t
`;

module.exports = q10;

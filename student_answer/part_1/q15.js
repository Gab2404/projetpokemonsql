const q15 = `
SELECT 
    t.name AS "Type",
    SUM(CASE WHEN p.pokedex_number BETWEEN 1 AND 151 THEN (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) ELSE 0 END) / NULLIF(SUM(CASE WHEN p.pokedex_number BETWEEN 1 AND 151 THEN 1 ELSE 0 END), 0) AS "Moyenne gen 1 total stat",
    SUM(CASE WHEN p.pokedex_number BETWEEN 252 AND 386 THEN (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) ELSE 0 END) / NULLIF(SUM(CASE WHEN p.pokedex_number BETWEEN 252 AND 386 THEN 1 ELSE 0 END), 0) AS "Moyenne gen 3 total stat",
    SUM(CASE WHEN p.pokedex_number BETWEEN 494 AND 649 THEN (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) ELSE 0 END) / NULLIF(SUM(CASE WHEN p.pokedex_number BETWEEN 494 AND 649 THEN 1 ELSE 0 END), 0) AS "Moyenne gen 5 total stat",
    SUM(CASE WHEN p.pokedex_number BETWEEN 722 AND 807 THEN (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) ELSE 0 END) / NULLIF(SUM(CASE WHEN p.pokedex_number BETWEEN 722 AND 807 THEN 1 ELSE 0 END), 0) AS "Moyenne gen 7 total stat"
FROM type t
JOIN pokemon_type pt ON t.type_id = pt.type_id
JOIN pokemon p ON pt.pokemon_id = p.pokemon_id
JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id
GROUP BY t.type_id, t.name
`;

module.exports = q15;

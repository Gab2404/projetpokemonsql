const q14 = `
SELECT 
    t.name AS "Type",
    (SELECT p.name FROM pokemon p JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id WHERE pt.type_id = t.type_id ORDER BY bs.hp DESC, (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) DESC, p.pokedex_number ASC LIMIT 1) AS "HP",
    (SELECT p.name FROM pokemon p JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id WHERE pt.type_id = t.type_id ORDER BY bs.attack DESC, (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) DESC, p.pokedex_number ASC LIMIT 1) AS "Attaque",
    (SELECT p.name FROM pokemon p JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id WHERE pt.type_id = t.type_id ORDER BY bs.defense DESC, (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) DESC, p.pokedex_number ASC LIMIT 1) AS "Défense",
    (SELECT p.name FROM pokemon p JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id WHERE pt.type_id = t.type_id ORDER BY bs.spe_attack DESC, (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) DESC, p.pokedex_number ASC LIMIT 1) AS "Spé. Attaque",
    (SELECT p.name FROM pokemon p JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id WHERE pt.type_id = t.type_id ORDER BY bs.spe_defense DESC, (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) DESC, p.pokedex_number ASC LIMIT 1) AS "Spé. Défense",
    (SELECT p.name FROM pokemon p JOIN pokemon_type pt ON p.pokemon_id = pt.pokemon_id JOIN base_stat bs ON p.pokemon_id = bs.pokemon_id WHERE pt.type_id = t.type_id ORDER BY bs.speed DESC, (bs.hp+bs.attack+bs.defense+bs.spe_attack+bs.spe_defense+bs.speed) DESC, p.pokedex_number ASC LIMIT 1) AS "Vitesse"
FROM type t
ORDER BY t.type_id
`;

module.exports = q14;

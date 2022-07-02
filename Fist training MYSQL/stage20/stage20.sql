SELECT type_id,COUNT(types.id) AS nb FROM pokemon_types JOIN types ON(pokemon_types.type_id=types.id) GROUP BY types.id;

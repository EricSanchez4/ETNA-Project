SELECT types.identifier AS type FROM types JOIN pokemon_types ON(pokemon_types.type_id=types.id) JOIN pokemon ON(pokemon_types.pokemon_id=pokemon.id) WHERE pokemon.identifier LIKE 'scyther';

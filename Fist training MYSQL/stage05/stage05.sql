SELECT moves.identifier AS attaque FROM moves JOIN pokemon_moves ON(moves.id=pokemon_moves.move_id) JOIN pokemon ON(pokemon.id=pokemon_moves.pokemon_id) WHERE pokemon_moves.pokemon_id LIKE '143' LIMIT 5;

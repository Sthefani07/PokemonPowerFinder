import React, { useState, useEffect } from 'react';
import { fetchData } from '../API/pokemonApi';

export default function PokemonDisplay() {
  const [data, setData] = useState(null);

  // Função para buscar um novo Pokémon ao clicar no botão
  const handleFetchPokemon = () => {
    fetchData(setData);
  };

  return (
    <div>
      <button onClick={handleFetchPokemon}>Find Your Pokémon!</button>
      {data ? (
        <div>
          <img src={data.sprites.front_default} alt={data.name} />
          <h2>{data.name}</h2>
          <p>Ability: {data.abilities[0].ability.name}</p>
          <p>This is the Pokémon that most resembles you!</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

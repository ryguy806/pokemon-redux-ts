import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from './store/store'
import { GetPokemon } from './actions/PokemonActions';

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  }

  const handleClick = () => dispatch (GetPokemon(pokemonName));

  console.log("Pokemon State: ", pokemonState);
  

  return (
    <div className="App">
      <input type="text" className="input" onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
      <div>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt={pokemonName}/>
            <img src={pokemonState.pokemon.sprites.front_shiny} alt={pokemonName}/>
            {
              pokemonState.pokemon.abilities.map((Ability, index) => {
                return <p key={index}>{Ability.ability.name}</p>
              })
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import {} from 'redux';
import { Dispatch } from 'react';
import { PokemonDispatchTypes, POKEMON_LOADING, POKEMON_LOADING_FAIL, POKEMON_LOADING_SUCCESS } from './PokemonActionTypes';
import axios from 'axios';

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_LOADING,
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase() }`);

        dispatch({
            type: POKEMON_LOADING_SUCCESS,
            payload: res.data,
        })

    } catch(e) {
        dispatch({
            type: POKEMON_LOADING_FAIL,
        })
    }
}
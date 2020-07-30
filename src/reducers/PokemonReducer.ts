import { 
    Pokemon,
    PokemonDispatchTypes,
    POKEMON_LOADING,
    POKEMON_LOADING_FAIL,
    POKEMON_LOADING_SUCCESS
} from "../actions/PokemonActionTypes";

interface InitialState {
    loading: boolean,
    pokemon?: Pokemon,
}

const initialState: InitialState = {
    loading: false,
};

const pokemonReducer = (
    state: InitialState = initialState,
    action: PokemonDispatchTypes
) => {
    switch(action.type){
        case POKEMON_LOADING:
            return {
                loading: true,
            };
        case POKEMON_LOADING_FAIL:
            return {
                loading: false,
            };
        case POKEMON_LOADING_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
            }

        default:
            return state;
    }
};

export default pokemonReducer;
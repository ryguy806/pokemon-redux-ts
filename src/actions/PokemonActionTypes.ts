export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_LOADING_FAIL = "POKEMON_LOADING_FAIL";
export const POKEMON_LOADING_SUCCESS = "POKEMON_LOADING_SUCCESS";

export interface PokemonLoading {
    type: typeof POKEMON_LOADING;
}

export interface PokemonLoadingFail {
    type: typeof POKEMON_LOADING_FAIL;
}

export interface PokemonLoadingSuccess {
    type: typeof POKEMON_LOADING_SUCCESS;
    payload: Pokemon;
}

export type Pokemon = {
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
    stats: PokemonStat[];
    type_one: PokemonType
    type_two?: PokemonType
}

export type PokemonAbility = {
    ability: {
        name: string;
    url: string;
    }
}

export type PokemonSprites = {
    front_default: string;
    front_shiny: string;
}

export type PokemonStat = {
    base_stat: number;
    stat: {
        name: string;
    }
}

export type PokemonType = {
    name: string;
}

export  type PokemonDispatchTypes = PokemonLoading | PokemonLoadingFail | PokemonLoadingSuccess;
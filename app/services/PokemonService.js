import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";

const pokemonApi = axios.create({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon?offset=30&limit=30'
})

class PokemonService{
    
    getPokemon(){
        const response = pokemonApi.get('pokemon')
        console.log(response)
    }
}

export const pokemonService = new PokemonService()
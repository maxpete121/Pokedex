import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";


const pokemonApi = axios.create({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon?offset=30&limit=30'
})

class PokemonService{
    
    async getPokemon(){
        const response = await pokemonApi.get('https://pokeapi.co/api/v2/pokemon?offset=30&limit=30')
        console.log(response)
        AppState.apiPokemon = response.data.results
        console.log(AppState.apiPokemon)
    }
}

export const pokemonService = new PokemonService()
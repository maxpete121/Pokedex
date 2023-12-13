import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { baseURL } from "../env.js";


const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

class PokemonService{
    
    async getPokemon(){
        const response = await pokemonApi.get('pokemon')
        console.log(response)
        AppState.apiPokemon = response.data.results
        console.log(AppState.apiPokemon)
    }

    async getActivePokemon(pokemonName){
        const response = await pokemonApi.get(`pokemon/${pokemonName}`)
        console.log('active Test', response)
        let newPokemon = new Pokemon(response.data)
        AppState.activePokemon = newPokemon
        console.log('active',AppState.activePokemon)
    }
}

export const pokemonService = new PokemonService()
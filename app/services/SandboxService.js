import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js";



class SandboxService{

    async savePokemon(){
        let activePokemons = AppState.activePokemon
        console.log('newActive', activePokemons)
        const response = await api.post('api/pokemon', activePokemons)
        console.log('response',response.data)
        let newPokemon = new Pokemon(response.data)
        AppState.SandBoxPokemon.push(newPokemon)
        console.log('sandbox',AppState.SandBoxPokemon)
    }
}

export const sandboxService = new SandboxService()
import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pokemon } from "../models/Pokemon.js";

function _drawPokemonSelect(){
    const pokemons = AppState.apiPokemon
    let content = ''
    pokemons.forEach(pokemon => content += Pokemon.pokemonListTemplate(pokemon))
    document.getElementById('draw-names').innerHTML = content
}

function _drawActivePokemon(){
    const activePokemon = AppState.activePokemon
    let content = activePokemon.pokemonActiveTemplate
    document.getElementById('active-temp').innerHTML = content
    
}

export class PokemonController{
    constructor(){
        AppState.on('apiPokemon', _drawPokemonSelect)
        AppState.on('activePokemon', _drawActivePokemon)
        this.getPokemon()
    }

    async getPokemon(){
        await pokemonService.getPokemon()
    }

    async getActivePokemon(pokemonName){
        await pokemonService.getActivePokemon(pokemonName)
    }
}
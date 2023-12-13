import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pokemon } from "../models/Pokemon.js";

function _drawPokemonSelect(){
    const pokemon = AppState.apiPokemon
    let content = ''
    pokemons.forEach(pokemon => content += Pokemon.pokemonListTemplate(pokemon))
    document.getElementById('draw-names').innerHTML = content
}

export class PokemonController{
    constructor(){
        AppState.on('apiPokemon', _drawPokemonSelect)
        this.getPokemon()
    }

    async getPokemon(){
        await pokemonService.getPokemon()
    }
}
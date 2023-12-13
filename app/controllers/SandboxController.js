import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandboxService.js";
import { Pokemon } from "../models/Pokemon.js";
import { Pop } from "../utils/Pop.js";


function _drawActive(){
    let activeP = AppState.activePokemon
    let content = ''
    activeP.forEach(pokemon => content += pokemon.pokemonTemp)
    document.getElementById('active-cards').innerHTML = content
}

export class SandboxController{
    constructor(){
        console.log('sandbox loaded')
    }


    async savePokemon(){
        try {
            await sandboxService.savePokemon()
        } catch (error) {
            Pop.error(error)
        }
    }
}
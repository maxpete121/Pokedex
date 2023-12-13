import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandboxService.js";
import { Pop } from "../utils/Pop.js";


export class SandboxController{
    constructor(){

    }


    async savePokemon(pokemonId){
        try {
            await sandboxService.savePokemon(pokemonId)
        } catch (error) {
            Pop.error(error)
        }
    }
}
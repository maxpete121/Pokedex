

export class Pokemon{
    constructor(data){
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.id = data.id
        this.abilities = data.abilities
        this.types = data.types
        this.moves = data.moves
    }

    pokemonAbilities(){
        return `
        
        `
    }
    static pokemonListTemplate(pokemon){
        return`
        <div class="d-flex mt-2 bg-light rounded-2 p-2">
        <div class="me-4">${pokemon.name}</div>
        <div class="me-4">${pokemon.__prop_name__}</div>
        <button onclick="app.PokemonController.getActivePokemon('${pokemon.name}')">Select</button>
        </div>
        `
    }

    get pokemonActiveTemplate(){
        return`
        <div class="w-50 bg-white card text-center">
        <img class="img-fluid" src='${this.img}'>
        <div class="d-flex text-center">
        <span class="me-2 fw-bold">Name:</span>
        <span class="text-uppercase">${this.name}</span>
        </div>
        <div class="d-flex">
        <span class="me-2 fw-bold">Abilities:</span>
        <div>
        <span class="text-capitalize">${this.abilities[0].ability.name},</span>
        <span class="text-capitalize">${this.abilities[1].ability.name}</span>
        </div>
        </div>
        <div class="d-flex">
        <span class="me-2 fw-bold">Move Preview:</span>
        <div>
        <span class="text-capitalize">${this.moves[0].move.name},</span>
        <span class="text-capitalize">${this.moves[1].move.name}</span>
        </div>
        </div>
        <span>
        <button onclick="app.SandboxController.savePokemon('${this.id}')">Add To Pokedex</button>
        </span>
        </div>
        `
    }

    get pokemonTemp(){
        return`
        <div class="col-2 bg-dark text-light">
        <span>${this.name}</span>
        </div>
        `
    }
}
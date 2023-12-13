

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
        <div class="w-25 bg-white card">
        <img src='${this.img}'>
        <div class="d-flex">
        <span class="me-2">Name:</span>
        <span>${this.name}</span>
        </div>
        <div class="d-flex">
        <span class="me-2">Abilities:</span>
        <div>
        <span>${this.abilities[0].ability.name},</span>
        <span>${this.abilities[1].ability.name}</span>
        </div>
        </div>
        <div></div>
        <span>
        <button>Add To Pokedex</button>
        </span>
        </div>
        `
    }
}
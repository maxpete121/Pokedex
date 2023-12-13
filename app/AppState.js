import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Pokemon } from './models/Pokemon.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  Pokemon = []

  /**@type {{name: string, url: string, __prop_name__: number}[]} */
  apiPokemon = []

  /**@type {Pokemon} */
  activePokemon = null
}

export const AppState = createObservableProxy(new ObservableAppState())
import Goods from "./Models/Goods.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
 

    /** @type {Goods[]} */
    goods = [
      new Goods('Football', 15, 30, 'http://placehold.it/500x500',),
      new Goods('Baseball', 7, 400, 'http://placehold.it/500x500'),
      new Goods('Soccer Ball', 20, 5, 'http://placehold.it/500x500'),
      new Goods('Golf Ball', 2, 700, 'http://placehold.it/500x500'),
      new Goods('Tennis Ball', 5, 200, 'http://placehold.it/500x500'),
      new Goods('Medicine Ball', 100, 8, 'http://placehold.it/500x500'),
      new Goods('Monsters Ball', 2000, 1, 'http://placehold.it/500x500'),
      new Goods('Cyclops Ball', 'Priceless', 'You cannot have it', 'http://placehold.it/500x500'),
    ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

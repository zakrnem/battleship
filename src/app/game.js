import { gameboard } from "./gameFactory"
import { insertShip } from "./insertShip"

export function userBoard() {
    const game = gameboard('human')
    insertShip(game, 1, ['B', 6], 'horizontal')
    insertShip(game, 2, ['E', 9], 'horizontal')
    insertShip(game, 3, ['C', 1], 'vertical')
    insertShip(game, 4, ['D', 8], 'vertical')
    insertShip(game, 5, ['I', 4], 'vertical')
    return game
}


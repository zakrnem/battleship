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

export function pcBoard() {
    const game = gameboard('computer')
    insertShip(game, 1, ['B', 6], 'horizontal')
    insertShip(game, 2, ['B', 2], 'horizontal')
    insertShip(game, 3, ['J', 6], 'vertical')
    insertShip(game, 4, ['G', 1], 'vertical')
    insertShip(game, 5, ['I', 4], 'vertical')
    return game
}


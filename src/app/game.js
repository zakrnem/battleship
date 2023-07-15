import { gameboard } from "./gameFactory"
import { insertShip } from "./insertShip"

import { insertBoard } from "./printBoard"

//We need to initialize the board obects for each player once and be able to edit them later

export function game() {
    const board1 = userBoard()
    const board2 = pcBoard()
    insertBoard('user', board1)
    insertBoard('pc', board2)
}

export function userBoard() {
    const game = gameboard('human')
    insertShip(game, 1, ['B', 6], 'horizontal')
    insertShip(game, 2, ['F', 9], 'horizontal')
    insertShip(game, 3, ['C', 1], 'vertical')
    insertShip(game, 4, ['D', 8], 'vertical')
    insertShip(game, 5, ['I', 4], 'vertical')
    game.receiveAttack(['A', 1])
    game.receiveAttack(['H', 6])
    return game
}

export function pcBoard() {
    const game = gameboard('computer')
    insertShip(game, 1, ['B', 6], 'horizontal')
    insertShip(game, 2, ['B', 2], 'horizontal')
    insertShip(game, 3, ['J', 6], 'vertical')
    insertShip(game, 4, ['G', 1], 'vertical')
    insertShip(game, 5, ['I', 4], 'vertical')
    game.receiveAttack(['F', 4])
    game.receiveAttack(['G', 8])
    return game
}


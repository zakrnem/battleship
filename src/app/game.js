import { gameboard } from "./gameFactory"
import { insertShip } from "./insertShip"

import { insertBoard } from "./printBoard"

//We need to initialize the board obects for each player once and be able to edit them later

export function game(typeOfOperation) {
    if (typeOfOperation === 'initialize') {
        const board1 = userBoard()
        const board2 = pcBoard()
        insertBoard('user', board1)
        insertBoard('pc', board2)
    }
    if (typeOfOperation === 'attack') {

    }
}

export function buildBoard() {
    const game = {
        user: gameboard('human'),
        computer: gameboard('computer')
    }
    insertShip(game.user, 1, ['B', 6], 'horizontal')
    insertShip(game.user, 2, ['F', 9], 'horizontal')
    insertShip(game.user, 3, ['C', 1], 'vertical')
    insertShip(game.user, 4, ['D', 8], 'vertical')
    insertShip(game.user, 5, ['I', 4], 'vertical')
    game.user.receiveAttack(['A', 1])
    game.user.receiveAttack(['H', 6])

    insertShip(game.computer, 1, ['B', 6], 'horizontal')
    insertShip(game.computer, 2, ['B', 2], 'horizontal')
    insertShip(game.computer, 3, ['J', 6], 'vertical')
    insertShip(game.computer, 4, ['G', 1], 'vertical')
    insertShip(game.computer, 5, ['I', 4], 'vertical')
    game.computer.receiveAttack(['F', 4])
    game.computer.receiveAttack(['G', 8])

    return game
}


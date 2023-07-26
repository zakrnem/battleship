import { insertShip } from "./insertShip";
import { randomCoordinates } from "./randomCoordinates";
import { game } from "./game";

export function randomShipsPlacement() {
    let board = game('return-board')
    let startCoordinates
    let shipNumber
    let orientation
    for (let i = 1; i <= 5; i++) {
        shipNumber = i
        startCoordinates = randomCoordinates()
        let randomNumber = Math.floor(Math.random() * 2)
        orientation = randomNumber === 1 ? 'horizontal' : 'vertical'
        insertShip(board.user, shipNumber, startCoordinates, orientation)
    }
}


//insertShip(game.computer, 1, ['B', 6], 'horizontal')
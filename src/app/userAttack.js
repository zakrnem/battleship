import { paintCell } from "./paintCell"
import { gameMessages } from "./gameMessages"
import { reportAllShipsSunk, boardDisabler } from "./reportAllShipsSunk"
import { game } from "./game"

export function makeUserAttack(board, attackCoordinates) {
    const hitShot = board.computer.receiveAttack(attackCoordinates)
    paintCell(attackCoordinates, 'pc', hitShot)
    gameMessages('user-attack')
    reportAllShipsSunk(board.computer)
    boardDisabler('write')
    game('receive-attack')
}
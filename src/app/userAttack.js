import { paintCell } from './paintCell'
import { gameMessages } from './gameMessages'
import { reportAllShipsSunk } from './reportAllShipsSunk'
import { game } from './game'
import { boardDisabler } from './boardDisabler'

export function makeUserAttack(board, attackCoordinates) {
  const hitShot = board.computer.receiveAttack(attackCoordinates)
  paintCell(attackCoordinates, 'pc', hitShot)
  gameMessages('user-attack')
  reportAllShipsSunk(board.computer)
  boardDisabler('write')
  game('receive-attack')
}

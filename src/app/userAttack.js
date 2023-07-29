import { paintCell } from './paintCell'
import { gameMessages } from './gameMessages'
import { reportAllShipsSunk } from './reportAllShipsSunk'
import { game } from './game'
import { boardDisabler } from './boardDisabler'

export function makeUserAttack(board, attackCoordinates) {
  const hitShot = board.computer.receiveAttack(attackCoordinates)
  try {
    paintCell(attackCoordinates, 'pc', hitShot)
  } catch (error) {
    console.log(error)
    return
  }
  gameMessages('user-attack')
  reportAllShipsSunk(board.computer)
  boardDisabler('write')
  game('receive-attack')
}
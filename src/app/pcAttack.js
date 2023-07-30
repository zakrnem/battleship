import { paintCell } from './paintCell'
import { gameMessages } from './gameMessages'
import { reportAllShipsSunk } from './reportAllShipsSunk'
import { boardDisabler } from './boardDisabler'
import { randomCoordinates } from './randomCoordinates'

export function makePcAttack(board) {
  setTimeout(() => {
    logAttack(board)
    gameMessages('pc-attack')
    reportAllShipsSunk(board, 'user')
    boardDisabler('write')
  }, 200)
}

function logAttack(board) {
  let attackCoordinates = randomCoordinates()
  let shotStatus = board.user.receiveAttack(attackCoordinates)
  if (shotStatus === 'previously-attacked') {
    logAttack(board)
  } else {
    paintCell(attackCoordinates, 'user', shotStatus)
  }
}

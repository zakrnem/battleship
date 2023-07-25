import { paintCell } from './paintCell'
import { gameMessages } from './gameMessages'
import { reportAllShipsSunk } from './reportAllShipsSunk'
import { boardDisabler } from './boardDisabler'

export function makePcAttack(board) {
  setTimeout(() => {
    logAttack(board)
    gameMessages('pc-attack')
    reportAllShipsSunk(board.user)
    boardDisabler('write')
  }, 50)
}

export function generateAttackCoordinates() {
  const randomNumber = Math.floor(Math.random() * 10)
  const letterCoordinate = String.fromCharCode(65 + randomNumber)
  const numberCoordinate = Math.floor(Math.random() * 10 + 1)
  return [letterCoordinate, numberCoordinate]
}

function logAttack(board) {
  let attackCoordinates = generateAttackCoordinates()
  let shotStatus = board.user.receiveAttack(attackCoordinates)
  if (shotStatus === 'previously-attacked') {
    logAttack(board)
  } else {
    paintCell(attackCoordinates, 'user', shotStatus)
  }
}

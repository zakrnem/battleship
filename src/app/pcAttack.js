import { paintCell } from './paintCell'
import { gameMessages } from './gameMessages'
import { reportAllShipsSunk } from './reportAllShipsSunk'
import { boardDisabler } from './boardDisabler'

export function makePcAttack(board) {
  setTimeout(() => {
    const attackCoordinates = generateAttackCoordinates()
    const hitShot = logAttack(attackCoordinates, board)
    console.log(hitShot)
    paintCell(attackCoordinates, 'user', hitShot)
    gameMessages('pc-attack')
    reportAllShipsSunk(board.user)
    boardDisabler('write')
  }, 500)
}

export function generateAttackCoordinates() {
  const randomNumber = Math.floor(Math.random() * 10)
  const letterCoordinate = String.fromCharCode(65 + randomNumber)
  const numberCoordinate = Math.floor(Math.random() * 9 + 1)
  return [letterCoordinate, numberCoordinate]
}

function logAttack(attackCoordinates, board) {
  let hitShot
  let counter = 0
  while (counter < 100) {
    counter++
    try {
      hitShot = board.user.receiveAttack(attackCoordinates)
      return hitShot
    } catch (error) {
      console.log(error)
    }
  }
}
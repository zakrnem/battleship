import { paintCell } from "./paintCell"
import { gameMessages } from "./gameMessages"
import { reportAllShipsSunk, boardDisabler } from "./reportAllShipsSunk"

export function makePcAttack (board) {
  setTimeout(() => {
    const attackCoordinates = generateAttackCoordinates()
    const hitShot = logAttack(attackCoordinates, board)      
    paintCell(attackCoordinates, 'user', hitShot)
    gameMessages('pc-attack')
    reportAllShipsSunk(board.user)
    boardDisabler('write')
  }, 500)
}

export function generateAttackCoordinates() {
  const randomNumber = Math.floor(Math.random() * 10)
  const letterCoordinate = String.fromCharCode(65 + randomNumber)
  const numberCoordinate = Math.floor((Math.random() * 9) + 1)
  return [letterCoordinate, numberCoordinate]
}

function logAttack (attackCoordinates, board) {
  let hitShot;
  let counter = 0
  while (counter < 3) {
    counter++
    try {
      hitShot = board.user.receiveAttack(attackCoordinates);
      break
    } catch (error) {
      console.log(error);
    }
    return hitShot
  }
}
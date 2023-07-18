import { game } from './game'
import { pcAttack } from './pcAttack'

export function gameMessages(board) {
  const messagePara = document.getElementById('message')
  let message
  if (
    board.user.ship1 !== null &&
    board.user.ship2 !== null &&
    board.user.ship3 !== null &&
    board.user.ship4 !== null &&
    board.user.ship5 !== null
  ) {
    message = `It's your turn to attack the opponent's board.`
  } else {
    message = `Please insert the ships on the left board`
  }
  messagePara.textContent = message
}

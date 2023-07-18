export function gameMessages(status, board) {
  const messagePara = document.getElementById('message')
  let message
  if (status === 'initialize') {
    if (
      board.user.ship1 === null &&
      board.user.ship2 === null &&
      board.user.ship3 === null &&
      board.user.ship4 === null &&
      board.user.ship5 === null
    ) {
      message = `Please insert the ships on the left board`
    } else {
      message = `It's your turn to attack the opponent's board.`
    }
  }
  if (status === 'user-attack') {
    message = '_'
    messagePara.style.color = 'var(--background-color)'
  }
  if (status === 'pc-attack') {
    message = `The computer has made an attack, now it's your turn`
    messagePara.style.color = ''
  }
  
  messagePara.textContent = message
}

//

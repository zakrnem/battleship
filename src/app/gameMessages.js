export function gameMessages(status, boolean) {
  const messagePara = document.getElementById('message')
  let message
  

  switch (true) {
    case status === 'initialize':
      message = `Welcome to the game.`
      break
    case status === 'place-ships':
      message = `Please insert the ships on the left board.`
      break
    case status === 'first-attack':
      message = 'Now you can attack the opponent on the right board.'
      break
    case status === 'user-attack':
      message = '_'
      messagePara.style.color = 'var(--background-color)'
      break
    case status === 'pc-attack':
      message = `The computer has made an attack, now it's your turn.`
      messagePara.style.color = ''
      break
  }
  if (status !== undefined) {
    messagePara.textContent = message
  }
}

export function orientationMessage(boolean) {
  const userMessage = document.getElementById('user-message')
  userMessage.textContent = 'Press "Space" to change ship orientation'
  if (boolean) userMessage.textContent = ''
}

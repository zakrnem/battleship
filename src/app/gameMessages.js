export function gameMessages(status) {
  const messagePara = document.getElementById('message')
  let message

  switch (true) {
    case status === 'initialize':
      message = `Welcome to the game.`
      break
    case status === 'place-ships':
      message = `Please insert the ships on the left board.`
      randomPlacementButton()
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

function randomPlacementButton() {
  //throw new Error
  let header = document.querySelector('.header')
  let randomButton = document.createElement('button')
  randomButton.id = 'random-insert'
  randomButton.textContent = 'Insert ships randomly'
  header.append(randomButton)
}

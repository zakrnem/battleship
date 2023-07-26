import { footer } from 'footer-zkrnem'
import { game } from './app/game'
import { randomShipsPlacement } from './app/randomShipsPlacement'

export function homepage() {
  document.addEventListener('keydown', (e) => {
    if (e.code === "Enter") {
      console.log(randomShipsPlacement())
    }
    if (e.code === "Space") {
      game('return-board')
    }
  })

  footer()
  const content = document.getElementById('content')

  const container = document.createElement('div')
  container.className = 'container'

  const title = document.createElement('p')
  title.textContent = 'Battleship'
  title.className = 'title-logo'

  const message = document.createElement('p')
  message.textContent = 'Welcome to the game.'
  message.id = 'message'

  const userSide = document.createElement('div')
  userSide.className = 'user-side'

  const userBoard = document.createElement('div')
  userBoard.className = 'user-board'
  for (let i = 0; i < 100; i++) {
    const userCell = document.createElement('div')
    userCell.id = 'user' + i
    userCell.className = 'user cell'
    userBoard.append(userCell)
  }
  const userBoardTitle = document.createElement('p')
  userBoardTitle.textContent = 'Player board'
  userBoardTitle.className = 'user-board-title'

  const userAliveShips = document.createElement('p')
  userAliveShips.id = 'user-message'

  userSide.append(userBoardTitle, userBoard, userAliveShips)

  const pcSide = document.createElement('div')
  pcSide.className = 'pc-side'
  const pcBoard = document.createElement('div')
  pcBoard.className = 'pc-board'
  for (let j = 0; j < 100; j++) {
    const pcCell = document.createElement('div')
    pcCell.id = 'pc' + j
    pcCell.className = 'pc cell'
    pcBoard.append(pcCell)
  }
  const pcBoardTitle = document.createElement('p')
  pcBoardTitle.textContent = 'Computer board'
  pcBoardTitle.className = 'pc-board-title'

  const pcAliveShips = document.createElement('p')
  pcAliveShips.id = 'pc-message'

  pcSide.append(pcBoardTitle, pcBoard, pcAliveShips)

  container.append(userSide, pcSide)
  content.append(title, message, container)
}

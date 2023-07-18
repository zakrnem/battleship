import { getCoordinatesFromId } from './app/coordinateFromId'
import { game } from './app/game'
import { boardDisabler } from './app/reportAllShipsSunk'


export function boardListener() {
  const pcBoard = document.querySelector('.pc-board')
  //Highlights cursor position on the board
  //The timeout could be the one that's causing the problem
  pcBoard.addEventListener('mouseover', (e) => {
    if (e.target.style.backgroundColor === '') {
      e.target.style.transition = 'background-color 0.1s ease-in'
      e.target.style.backgroundColor = 'var(--mouseover)'
      setTimeout(() => {
        e.target.style.transition = 'background-color 0.1s ease-in'
        e.target.style.backgroundColor = ''
      }, 100)
    }
  })
  pcBoard.addEventListener('click', (e) => attackHandler(e))
}

function attackHandler(e) {
  let disable = boardDisabler('read')
  if (disable === -1) {
    const idNumber = parseInt(e.target.id.match(/\d+/)[0])
    const attackCoordinates = getCoordinatesFromId(idNumber)
    game('attack-oponent', attackCoordinates)
  }
}

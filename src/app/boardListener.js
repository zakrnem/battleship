import { getCoordinatesFromId } from './coordinateFromId'
import { game } from './game'
import { boardDisabler } from './boardDisabler'
import { placeShipListener } from './placeShips'


export function boardListener() {
  const pcBoard = document.querySelector('.pc-board')
  pcBoard.addEventListener('mouseover', (e) => mouseoverHandler(e))
  pcBoard.addEventListener('click', (e) => attackHandler(e))
  placeShipListener()
}

function attackHandler(e) {
  let disable = boardDisabler('read')
  if (disable === -1) {
    const idNumber = parseInt(e.target.id.match(/\d+/)[0])
    const attackCoordinates = getCoordinatesFromId(idNumber)
    game('attack-oponent', attackCoordinates)
  }
}

function mouseoverHandler(e) {
  let disable = boardDisabler('read')
  if (disable === -1) {
    if (e.target.style.backgroundColor === '') {
      e.target.style.transition = 'background-color 0.1s ease-in'
      e.target.style.backgroundColor = 'var(--mouseover)'
      setTimeout(() => {
        e.target.style.transition = 'background-color 0.1s ease-in'
        e.target.style.backgroundColor = ''
      }, 100)
    }
  }
}

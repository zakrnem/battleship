import { getCoordinatesFromId } from './coordinateFromId'
import { game } from './game'
import { gameMessages } from './gameMessages'
import { pcBoardListener } from './pcBboardListener'
import { paintUserCell } from './paintCell'
import { randomShipsPlacement } from './userRandomPlacement'

const ships = [5, 4, 3, 3, 2]
let tempCells = []
let counter = 0
let orientation = 1
let cellSum = 1
let firstAttack = 0

export function placeShipListener() {
  const userBoard = document.querySelector('.user-board')
  userBoard.addEventListener('click', (e) => {
    if (
      e.target.className !== 'user-board' &&
      e.target.id !== 'occupied' &&
      ships.length > 0
    ) {
      placeShip(e)
    }
  })
  userBoard.addEventListener('mouseover', (e) => {
    if (counter === 0) orientationMessage()
    counter++
    if (ships.length > 0) {
      placeShipTemp(e)
    }
  })
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      orientation *= -1
      if (orientation === -1) {
        cellSum = 10 //Vertical
      } else {
        cellSum = 1 //Horizontal
      }
    }
    if (e.ctrlKey && e.key === ' ') {
      randomShipsPlacement()
    }
    if (e.ctrlKey && e.shiftKey && e.altKey) {
      game('return-board')
    }
  })
  document.addEventListener('mouseover', () => {
    if (ships.length > 0) {
      gameMessages('place-ships')
    }
    if (ships.length === 0 && firstAttack === 0) {
      gameMessages('first-attack')
      firstAttack++
    }
    if (ships.length === 0) {
      orientationMessage('remove')
      pcBoardListener()
    }
  })
}

function placeShipTemp(e) {
  removeShipTemp()
  const currLength = ships[0]
  const startID = e.target.id
  let startIdNumber = parseInt(startID.match(/\d+/g))

  tempCells = []
  tempCells.push(startID)

  for (let i = 1; i < currLength; i++) {
    startIdNumber += cellSum
    const cellID = 'user' + startIdNumber
    tempCells.push(cellID)
    let cell = document.getElementById(cellID)
    paintUserCell('temp-ship', cell)
  }
  paintUserCell('temp-ship', e.target)
}

function placeShip(e) {
  const currLength = ships.shift()
  const startID = e.target.id
  const startCoordinates = getCoordinatesFromId(startID)
  const orientationString = orientation === 1 ? 'horizontal' : 'vertical'

  let legalityOfPlacement = game('insert-ship', startCoordinates, orientationString)
  if (legalityOfPlacement) {
    paintUserCell('place-ship', e.target, orientationString, currLength)
  } else {
    ships.unshift(currLength)
  }
}

function removeShipTemp() {
  const length = tempCells.length
  for (let i = 0; i < length; i++) {
    const cellID = tempCells.shift()
    let cell = document.getElementById(cellID)
    paintUserCell('remove-ship', cell)
  }
}

function orientationMessage(remove) {
  const userMessage = document.getElementById('user-message')
  userMessage.textContent = 'Press "Space" to change ship orientation'
  if (remove === 'remove') userMessage.textContent = ''
}

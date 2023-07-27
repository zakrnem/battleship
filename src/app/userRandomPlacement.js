import { randomCoordinates } from './randomCoordinates'
import { game } from './game'
import { idFromCoordinates } from './idFromCoordinates'
import { paintUserCell } from './paintCell'

let count = 1
const ships = [5, 4, 3, 3, 2]

export function shipsPlacementInputs() {
  if (count <= 5) {
    let startCoordinates = randomCoordinates()
    let randomNumber = Math.floor(Math.random() * 2)
    let orientationString = randomNumber === 1 ? 'horizontal' : 'vertical'
    return {
      coordinates: startCoordinates,
      orientation: orientationString,
    }
  } else {
    throw new Error('All ships have already been inserted.')
  }
}

export function randomShipsPlacement() {
  let randomPlacement = shipsPlacementInputs()
  //console.log(randomPlacement.coordinates)
  const currLength = ships[0]
  //console.log(currLength)
  try {
    let sucess = game('insert-ship', randomPlacement.coordinates, randomPlacement.orientation)
    if (sucess) {
      paintRandomCell(randomPlacement, currLength)
      ships.shift()
      count++
    } else {
      randomShipsPlacement()
    }
  } catch (error) {
    console.log(error)
  }
  if (count <= 5) randomShipsPlacement()
}

function paintRandomCell(randomPlacement, currLength) {
  let startCoordinates = randomPlacement.coordinates
  let orientation = randomPlacement.orientation
  let startID = idFromCoordinates(startCoordinates, 'user')
  let startCell = document.getElementById(startID)
  paintUserCell('place-ship', startCell, orientation, currLength)
}

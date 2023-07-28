import { randomCoordinates } from './randomCoordinates'
import { game } from './game'

let count = 1
const ships = [5, 4, 3, 3, 2]

function shipsPlacementInputs() {
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
    let sucess = game('insert-computer-ship', randomPlacement.coordinates, randomPlacement.orientation)
    if (sucess) {
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
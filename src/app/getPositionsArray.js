import { checkCoordinates } from './checkCoordinates'

export function getPositionsArray(length, startCoordinates, orientation) {
  const positionsArray = []
  let coordinates = checkCoordinates(startCoordinates[0], startCoordinates[1])
  if (coordinates === null) {
    throw new Error('Start position is outside of board')
  } else {
    let letterCoordinate = coordinates[0]
    let numberCoordinate = coordinates[1]

    if (orientation === 'horizontal') {
      for (let i = 0; i < length; i++) {
        if (i === 0) positionsArray.push([letterCoordinate, numberCoordinate])
        else {
          letterCoordinate = String.fromCharCode(letterCoordinate[0].charCodeAt(0) + 1)
          coordinates = checkCoordinates(letterCoordinate, numberCoordinate)
          positionsArray.push(coordinates)
        }
      }
    } else if (orientation === 'vertical') {
      for (let i = 0; i < length; i++) {
        if (i === 0) positionsArray.push([letterCoordinate, numberCoordinate])
        else {
          numberCoordinate += 1
          coordinates = checkCoordinates(letterCoordinate, numberCoordinate)
          positionsArray.push(coordinates)
        }
      }
    }
    if (coordinates === null) {
      throw new Error('Part of the ship is outside the board')
    } else {
      return positionsArray
    }
  }
}

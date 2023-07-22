import { ship } from './gameFactory'
import { checkCoordinates } from './checkCoordinates'

export function insertShip(gameObj, shipNumber, startCoordinate, orientation) {
  const length = ['', 5, 4, 3, 3, 2]
  
  switch (true) {
    case shipNumber === 1:
      gameObj.ship1 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj)
      break
    case shipNumber === 2:
      gameObj.ship2 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj)
      break
    case shipNumber === 3:
      gameObj.ship3 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj)
      break
    case shipNumber === 4:
      gameObj.ship4 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj)
      break
    case shipNumber === 5:
      gameObj.ship5 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj)
      break
  }
}

function insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj) {
  const positionsArray = getPositionsArray(length[shipNumber], startCoordinate, orientation)
  positionsArray.forEach((coordinates) => {
    gameObj.locateShipCell(shipNumber, coordinates)
  })
}

export function getPositionsArray(length, startCoordinate, orientation) {
  const positionsArray = []
  let coordinates = checkCoordinates(startCoordinate[0], startCoordinate[1])
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
          //Before pushing a set of coordinates onto the positionsArray
          //we could check in the game[] if that cell is occupied,
          //for that we would need a new method that checks
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

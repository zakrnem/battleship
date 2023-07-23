import { ship } from './gameFactory'
import { getPositionsArray } from './getPositionsArray'

export function insertShip(gameObj, shipNumber, startCoordinates, orientation) {
  const length = ['', 5, 4, 3, 3, 2]
  
  switch (true) {
    case shipNumber === 1:
      gameObj.ship1 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinates, orientation, gameObj)
      break
    case shipNumber === 2:
      gameObj.ship2 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinates, orientation, gameObj)
      break
    case shipNumber === 3:
      gameObj.ship3 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinates, orientation, gameObj)
      break
    case shipNumber === 4:
      gameObj.ship4 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinates, orientation, gameObj)
      break
    case shipNumber === 5:
      gameObj.ship5 = new ship(length[shipNumber])
      insertCompleteShip(length, shipNumber, startCoordinates, orientation, gameObj)
      break
  }
}

export function insertCompleteShip(length, shipNumber, startCoordinates, orientation, gameObj) {
  const positionsArray = getPositionsArray(length[shipNumber], startCoordinates, orientation)
  let cellIsOccupied = isCellOccupied(positionsArray, gameObj)
  if (!cellIsOccupied) {
    positionsArray.forEach((coordinates) => {
      gameObj.locateShipCell(shipNumber, coordinates)
    })
  }
}

export function isCellOccupied(positionsArray, gameObj) {
  positionsArray.forEach((coordinates) => {
    let isCellOccupied = gameObj.isCellOccupied(coordinates)
    if (isCellOccupied) {
      throw new Error(`There's another ship at this position`)
    } 
  })
  return false
}

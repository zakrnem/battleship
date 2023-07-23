import { ship } from './gameFactory'
import { getPositionsArray } from './getPositionsArray'

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

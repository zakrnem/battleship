export function ship(length) {
  return {
    length: length,
    hits: 0,
    hit: function () {
      if (this.hits < this.length) ++this.hits
      return this.isSunk()
    },
    isSunk: function () {
      return this.hits === this.length ? true : false
    },
  }
}

export function buildGrid() {
  const boardObj = {}

  for (let row = 1; row <= 10; row++) {
    boardObj[row] = {}

    for (
      let column = 'A';
      column <= 'J';
      column = String.fromCharCode(column.charCodeAt(0) + 1)
    ) {
      boardObj[row][column] = '_'
    }
  }
  return boardObj
}

export function gameboard() {
  return {
    grid: buildGrid(),
    ship1: null,
    ship2: null,
    ship3: null,
    ship4: null,
    ship5: null,
    receiveAttack: function (attackCoordinates) {
      const coordinates = checkCoordinates(attackCoordinates[0], attackCoordinates[1])
      const letterCoordinate = coordinates[0]
      const numberCoordinate = coordinates[1]
      let boardCell = this.grid[numberCoordinate][letterCoordinate]
      if (boardCell === '_') {
        this.grid[numberCoordinate][letterCoordinate] = 'X'
      } else if (boardCell === 'X') {
        throw new Error('Cell has already been attacked')
      } else if (typeof boardCell === 'object') {
        boardCell.hit()
        console.log(boardCell.hits)
        boardCell = 'X'
      }
      return this.grid
      //return this.allShipsSunk()
    },
    locateShipCell: function (shipNumber, coordinates) {
      const letterCoordinate = coordinates[0]
      const numberCoordinate = coordinates[1]
      let boardCell = this.grid[numberCoordinate][letterCoordinate]

      if (boardCell === '_') {
        this.grid[numberCoordinate][letterCoordinate] = shipNumber.toString()
      } else if (typeof boardCell === 'object') {
        throw new Error(`There's another ship in this location`)
      }
      return this.grid
    },
    allShipsSunk: function () {},
  }
}

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

  function insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj) {
    const positionsArray = getPositionsArray(length[shipNumber], startCoordinate, orientation)
    positionsArray.forEach((coordinates) => {
      gameObj.locateShipCell(shipNumber, coordinates)
    })
  }
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

export function checkCoordinates(letterCoordinate, numberCoordinate) {
  letterCoordinate =
    letterCoordinate.charCodeAt() < 65 || letterCoordinate.charCodeAt() > 74
      ? null
      : letterCoordinate
  numberCoordinate = numberCoordinate > 10 || numberCoordinate < 1 ? null : numberCoordinate
  return letterCoordinate === null || numberCoordinate === null
    ? null
    : [letterCoordinate, numberCoordinate]
}

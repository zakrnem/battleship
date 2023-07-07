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
    receiveAttack: function () {
      return this.allShipsSunk()
    },
    allShipsSunk: function () {},
  }
}

function insertShip(shipNumber, startCoordinate, orientation) {
  let length

  switch (true) {
    case shipNumber === 1:
      length = 5
      gameboard.ship1 = new ship(length)
      break
    case shipNumber === 2:
      length = 4
      gameboard.ship2 = new ship(length)
      break
    case shipNumber === 3:
      length = 3
      gameboard.ship3 = new ship(length)
      break
    case shipNumber === 4:
      length = 3
      gameboard.ship4 = new ship(length)
      break
    case shipNumber === 5:
      length = 2
      gameboard.ship5 = new ship(length)
      break
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
          letterCoordinate = String.fromCharCode(
            letterCoordinate[0].charCodeAt(0) + 1
          )
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
  numberCoordinate =
    numberCoordinate > 10 || numberCoordinate < 1 ? null : numberCoordinate
  return letterCoordinate === null || numberCoordinate === null
    ? null
    : [letterCoordinate, numberCoordinate]
}

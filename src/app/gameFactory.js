import { checkCoordinates } from './checkCoordinates'

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

export function gameboard() {
  function buildGrid() {
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
      const initialGrid = this.grid
      const initialBoardCell = initialGrid[numberCoordinate][letterCoordinate]
      let hitShot = false

      if (initialBoardCell === 'X') {
        return 'previously-attacked'
      }
      switch (true) {
        case boardCell === '1':
          this.ship1.hit()
          hitShot = true
          break
        case boardCell === '2':
          this.ship2.hit()
          hitShot = true
        case boardCell === '3':
          this.ship3.hit()
          hitShot = true
          break
        case boardCell === '4':
          this.ship4.hit()
          hitShot = true
          break
        case boardCell === '5':
          this.ship5.hit()
          hitShot = true
          break
      }
      this.grid[numberCoordinate][letterCoordinate] = 'X'
      return hitShot
    },
    locateShipCell: function (shipNumber, coordinates) {
      const letterCoordinate = coordinates[0]
      const numberCoordinate = coordinates[1]
      let boardCell = this.grid[numberCoordinate][letterCoordinate]

      if (boardCell === '_') {
        this.grid[numberCoordinate][letterCoordinate] = shipNumber.toString()
      }
      return this.grid
    },
    isCellOccupied: function (coordinates) {
      const letterCoordinate = coordinates[0]
      const numberCoordinate = coordinates[1]
      let boardCell = this.grid[numberCoordinate][letterCoordinate]
      boardCell = parseInt(boardCell)

      if (isNaN(boardCell)) {
        return false
      } else {
        return true
      }
    },
    allShipsSunk: function () {
      return this.ship1.isSunk() &&
        this.ship2.isSunk() &&
        this.ship3.isSunk() &&
        this.ship4.isSunk() &&
        this.ship5.isSunk()
        ? true
        : false
    },
  }
}

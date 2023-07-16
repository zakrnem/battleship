import { checkCoordinates } from './checkCoordinates'
import { paintAttackedShip } from './idFromCoordinates'

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

      if (initialBoardCell === 'X') {
        throw new Error('Cell has already been attacked')
      }
      if (!isNaN(parseInt(initialBoardCell))) {
        paintAttackedShip(attackCoordinates)
      }
      switch (true) {
        case boardCell === '1':
          this.ship1.hit()
          break
        case boardCell === '2':
          this.ship2.hit()
          break
        case boardCell === '3':
          this.ship3.hit()
          break
        case boardCell === '4':
          this.ship4.hit()
          break
        case boardCell === '5':
          this.ship5.hit()
          break
      }
      this.grid[numberCoordinate][letterCoordinate] = 'X'
        
      if (this.ship1 === null ||
        this.ship2 === null ||
        this.ship3 === null ||
        this.ship4 === null ||
        this.ship5 === null) {
          return false
      } else {
          return this.allShipsSunk()
      }
      
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

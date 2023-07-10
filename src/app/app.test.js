import {
  ship,
  buildGrid,
  getPositionsArray,
  checkCoordinates,
  gameboard,
  insertShip,
} from './app'

describe('ship Factory', () => {
  const ship1 = ship(2)
  const ship2 = ship(5)
  function executeMultipleTimes() {
    for (let i = 0; i < 4; i++) {
      ship2.hit()
    }
    return ship2.hit()
  }
  test(`A ship with a length of 2 doesn't sinks on the first attack.`, () =>
    expect(ship1.hit()).toEqual(false))

  test('A ship with a length of 2 sinks on the second attack.', () =>
    expect(ship1.hit()).toEqual(true))

  test('A ship with a length of 5 sinks after 5 attacks.', () =>
    expect(executeMultipleTimes()).toEqual(true))
})

describe('buildGrid: Builds the gameboard.', () => {
  const board = buildGrid()
  const boardResult = {
    1: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    2: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    3: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    4: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    5: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    6: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    7: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    8: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    9: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    10: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
  }
  test('The gameboard grid is built sucessfully.', () => expect(board).toEqual(boardResult))
})

describe('checkCoordinates: Checks whether a specific coordinate is inside the board.', () => {
  test('Check coordinates function returns the same values when input is valid.', () => {
    expect(checkCoordinates('D', 10)).toEqual(['D', 10])
    expect(checkCoordinates('A', 5)).toEqual(['A', 5])
  })

  test('Check coordinates function returns null when input is illegal.', () => {
    expect(checkCoordinates('D', 0)).toEqual(null)
    expect(checkCoordinates('W', 4)).toEqual(null)
    expect(checkCoordinates('A', 13)).toEqual(null)
    expect(checkCoordinates('F', 12)).toEqual(null)
  })
})

describe('getPositionsArray: Gets the positions of a ship.', () => {
  const start1 = ['B', 2]
  const shipLength1 = 5
  const positionsArray1 = [
    ['B', 2],
    ['C', 2],
    ['D', 2],
    ['E', 2],
    ['F', 2],
  ]
  const shipLength2 = 4
  const positionsArray2 = [
    ['B', 2],
    ['B', 3],
    ['B', 4],
    ['B', 5],
  ]
  const start2 = ['B', 10]
  const start3 = ['I', 3]
  const start4 = ['A', 12]
  const start5 = ['K', 1]
  test('Builds the ship positions array for horizontal orientation.', () =>
    expect(getPositionsArray(shipLength1, start1, 'horizontal')).toEqual(positionsArray1))
  test('Builds the ship positions array for vertical orientation.', () =>
    expect(getPositionsArray(shipLength2, start1, 'vertical')).toEqual(positionsArray2))
  test('Throws error when part of the ship is outside the board vertically.', () => {
    expect(() => {
      getPositionsArray(shipLength1, start2, 'vertical')
    }).toThrow('Part of the ship is outside the board')
  })
  test('Throws error when part of the ship is outside the board horizontally.', () => {
    expect(() => {
      getPositionsArray(shipLength1, start3, 'horizontal')
    }).toThrow('Part of the ship is outside the board')
  })
  test('Throws error when start of the ship is outside the board vertically.', () => {
    expect(() => {
      getPositionsArray(shipLength1, start4, 'vertical')
    }).toThrow('Start position is outside of board')
  })
  test('Throws error when start of the ship is outside the board horizontally.', () => {
    expect(() => {
      getPositionsArray(shipLength1, start5, 'vertical')
    }).toThrow('Start position is outside of board')
  })
})

describe('gameboard: A empty board receives attacks.', () => {
  const game = gameboard()
  const grid1 = {
    1: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    2: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    3: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    4: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    5: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    6: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    7: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    8: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    9: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    10: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
  }
  const attackCoordinate = ['D', 4]
  const grid2 = {
    1: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    2: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    3: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    4: {
      A: '_',
      B: '_',
      C: '_',
      D: 'X',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    5: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    6: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    7: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    8: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    9: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    10: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
  }
  const shipNumber = 1
  const shipCoordinate = ['E', 5]
  const grid3 = {
    1: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    2: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    3: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    4: {
      A: '_',
      B: '_',
      C: '_',
      D: 'X',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    5: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '1',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    6: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    7: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    8: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    9: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
    10: {
      A: '_',
      B: '_',
      C: '_',
      D: '_',
      E: '_',
      F: '_',
      G: '_',
      H: '_',
      I: '_',
      J: '_',
    },
  }
  test('Executing the gameboard f() creates a new object with the desired grid.', () => {
    expect(game.grid).toEqual(grid1)
  })
  test('Calling the receiveAttack f() of the game obj with an attackCoordinate produces the desired grid.', () => {
    expect(game.receiveAttack(attackCoordinate)).toEqual(grid2)
  })
  test('Executing the game obj method locateShip() inserts one block of a ship in one cell of the grid.', () => {
    expect(game.locateShipCell(shipNumber, shipCoordinate)).toEqual(grid3)
  })
})

describe('insertShip: Inserts ships on the board.', () => {
  const game = gameboard()
  const startCoordinate1 = ['B', 6]
  const orientation1 = 'horizontal'
  const startCoordinate2 = ['E', 9]
  const orientation2 = 'horizontal'
  const startCoordinate3 = ['C', 1]
  const orientation3 = 'vertical'
  const startCoordinate4 = ['D', 8]
  const orientation4 = 'vertical'
  const startCoordinate5 = ['I', 4]
  const orientation5 = 'vertical'
  const grid = {
    1: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    2: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    3: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    4: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
    5: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
    6: { A: '_', B: '1', C: '1', D: '1', E: '1', F: '1', G: '_', H: '_', I: '_', J: '_' },
    7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    8: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    9: { A: '_', B: '_', C: '_', D: '4', E: '2', F: '2', G: '2', H: '2', I: '_', J: '_' },
    10: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
  }
  insertShip(game, 1, startCoordinate1, orientation1)
  insertShip(game, 2, startCoordinate2, orientation2)
  insertShip(game, 3, startCoordinate3, orientation3)
  insertShip(game, 4, startCoordinate4, orientation4)
  insertShip(game, 5, startCoordinate5, orientation5)
  test('insertShip f() locates multiple ships on the board.', () => {
    expect(game.grid).toEqual(grid)
  })
  test(`insertShip f() assigns node values to the game obj parameter 'ship1'.`, () => {
    expect(game.ship1.length).toEqual(5)
  })
  test(`insertShip f() assigns node values to the game obj parameter 'ship2'.`, () => {
    expect(game.ship2.length).toEqual(4)
  })
  test(`insertShip f() assigns node values to the game obj parameter 'ship3'.`, () => {
    expect(game.ship3.length).toEqual(3)
  })
  test(`insertShip f() assigns node values to the game obj parameter 'ship4'.`, () => {
    expect(game.ship4.length).toEqual(3)
  })
})

describe('gameboard: Ships receive attacks & and sink.', () => {
  const game = gameboard()
  insertShip(game, 1, ['B', 6], 'horizontal')
  insertShip(game, 2, ['E', 9], 'horizontal')
  insertShip(game, 3, ['C', 1], 'vertical')
  insertShip(game, 4, ['D', 8], 'vertical')
  insertShip(game, 5, ['I', 4], 'vertical')
  const grid1 = {
    1: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    2: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    3: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    4: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
    5: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
    6: { A: '_', B: '1', C: '1', D: '1', E: '1', F: '1', G: '_', H: '_', I: '_', J: '_' },
    7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    8: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    9: { A: '_', B: '_', C: '_', D: '4', E: '2', F: '2', G: '2', H: '2', I: '_', J: '_' },
    10: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
  }
  const grid2 = {
    1: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    2: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    3: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: 'X', H: '_', I: '_', J: '_' },
    4: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: 'X', J: '_' },
    5: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: 'X', I: 'X', J: '_' },
    6: { A: '_', B: 'X', C: '1', D: 'X', E: '1', F: '1', G: '_', H: '_', I: '_', J: '_' },
    7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    8: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    9: { A: '_', B: '_', C: '_', D: '4', E: '2', F: '2', G: '2', H: '2', I: '_', J: '_' },
    10: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
  }

  test('Initial board is setup with 5 ships.', () => {
    expect(game.grid).toEqual(grid1)
  })
  test('Ship 1 receives attacks.', () => {
    game.receiveAttack(['B', '6'])
    game.receiveAttack(['D', '6'])
    expect(game.ship1.hits).toEqual(2)
    expect(game.ship1.isSunk()).toEqual(false)
  })
  test('Ship 5 sinks after two attacks.', () => {
    game.receiveAttack(['I', '4'])
    game.receiveAttack(['I', '5'])
    expect(game.ship5.isSunk()).toEqual(true)
  })
  test('Board is affected as expected after attacks.', () => {
    game.receiveAttack(['G', '3'])
    game.receiveAttack(['H', '5'])
    expect(game.grid).toEqual(grid2)
  })
  test(`Unattacked ships don't have hits.`, () => {
    expect(game.ship1.hits).toEqual(2)
    expect(game.ship5.hits).toEqual(2)
    expect(game.ship2.hits).toEqual(0)
  })
  test('Throws error when attacking a previously attacked cell.', () => {
    expect(() => {
      game.receiveAttack(['D', '6'])
    }).toThrow('Cell has already been attacked')
    expect(game.ship1.hits).toEqual(2)
    expect(() => {
      game.receiveAttack(['I', '4'])
    }).toThrow('Cell has already been attacked')
    expect(game.ship5.hits).toEqual(2)
    expect(() => {
      game.receiveAttack(['G', '3'])
    }).toThrow('Cell has already been attacked')
  })
  test(`allShipsSunk f() returns false when all ships haven't been sunk`, () => {
    expect(game.allShipsSunk()).toEqual(false)
  })
  test(`allShipsSunk f() returns true when all ships have been sunk`, () => {
    game.ship1.hit()
    game.ship1.hit()
    game.ship1.hit()
    game.ship1.hit()
    game.ship2.hit()
    game.ship2.hit()
    game.ship2.hit()
    game.ship2.hit()
    game.ship3.hit()
    game.ship3.hit()
    game.ship3.hit()
    game.ship4.hit()
    game.ship4.hit()
    game.ship4.hit()
    expect(game.ship1.hits).toEqual(5)
    expect(game.ship2.hits).toEqual(4)
    expect(game.ship3.hits).toEqual(3)
    expect(game.ship4.hits).toEqual(3)
    expect(game.ship5.hits).toEqual(2)
    expect(game.allShipsSunk()).toEqual(true)

  })
  
})

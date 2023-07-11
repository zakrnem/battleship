import {
  ship,
  gameboard,
} from './gameObj'

import { insertShip } from './insertShip'

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
  test('Creates a new object with the desired board.', () => {
    expect(game.grid).toEqual(grid1)
  })
  test('Receiving an attack modifies the board as expected.', () => {
    expect(game.receiveAttack(attackCoordinate)).toEqual(grid2)
  })
  test('Using the method locateShip() inserts one block of a ship in one cell of the board.', () => {
    expect(game.locateShipCell(shipNumber, shipCoordinate)).toEqual(grid3)
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
  test(`Informs correctly when all ships haven't been sunk`, () => {
    expect(game.allShipsSunk()).toEqual(false)
  })
  test(`Informs correctly when all ships have been sunk`, () => {
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

import { insertShip } from './insertShip'
import { gameboard } from './gameFactory'

describe('Inserts ships on the board.', () => {
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
  test('Locates multiple ships on the board.', () => {
    expect(game.grid).toEqual(grid)
  })
  test(`Assigns node values to the game obj parameter 'ship1'.`, () => {
    expect(game.ship1.length).toEqual(5)
  })
  test(`Assigns node values to the game obj parameter 'ship2'.`, () => {
    expect(game.ship2.length).toEqual(4)
  })
  test(`Assigns node values to the game obj parameter 'ship3'.`, () => {
    expect(game.ship3.length).toEqual(3)
  })
  test(`Assigns node values to the game obj parameter 'ship4'.`, () => {
    expect(game.ship4.length).toEqual(3)
  })
})

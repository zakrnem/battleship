import { buildBoard } from './game'
import { arrayFromBoard } from './printBoard'
import { insertShip } from './insertShip'

describe('Flattens the grid object.', () => {
  const game = buildBoard()
  insertShip(game.user, 1, ['B', 6], 'horizontal')
  insertShip(game.user, 2, ['F', 9], 'horizontal')
  insertShip(game.user, 3, ['C', 1], 'vertical')
  insertShip(game.user, 4, ['D', 8], 'vertical')
  insertShip(game.user, 5, ['I', 4], 'vertical')
  insertShip(game.computer, 1, ['B', 6], 'horizontal')
  insertShip(game.computer, 2, ['B', 2], 'horizontal')
  insertShip(game.computer, 3, ['J', 6], 'vertical')
  insertShip(game.computer, 4, ['G', 1], 'vertical')
  insertShip(game.computer, 5, ['I', 4], 'vertical')
  const flatArr = arrayFromBoard(game.user.grid)
  const expectedArr = [
    '_',
    '_',
    '3',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '3',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '3',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '5',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '5',
    '_',
    '_',
    '1',
    '1',
    '1',
    '1',
    '1',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '4',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '4',
    '_',
    '2',
    '2',
    '2',
    '2',
    '_',
    '_',
    '_',
    '_',
    '4',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
  ]
  test(`Game object is behaving as expected`, () => {
    expect(game.user.ship5.length).toEqual(2)
    expect(game.computer.ship1.length).toEqual(5)
  })
  test(`Builds a flattened array from the player's grid`, () => {
    expect(flatArr).toEqual(expectedArr)
  })
})

import { userBoard } from "./game";
import { printUserBoard } from "./printBoard";

describe('Flattens the grid object.', () => {
    const game = userBoard()
    const flatArr = printUserBoard(game.grid)
    const expectedArr = [
        '_', '_', '3', '_', '_', '_', '_', '_', '_', '_', '_',
        '_', '3', '_', '_', '_', '_', '_', '_', '_', '_', '_',
        '3', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_',
        '_', '_', '_', '_', '_', '5', '_', '_', '_', '_', '_',
        '_', '_', '_', '_', '5', '_', '_', '1', '1', '1', '1',
        '1', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_',
        '_', '_', '_', '_', '_', '_', '_', '4', '_', '_', '_',
        '_', '_', '_', '_', '_', '_', '4', '2', '2', '2', '2',
        '_', '_', '_', '_', '_', '4', '_', '_', '_', '_', '_',
        '_'
      ]
    test(`Game object is behaving as expected`, () => {
        expect(game.user).toEqual('human')
        expect(game.ship1.length).toEqual(5)
    })
    test(`Builds a flattened array from the player's grid`, () => {
        expect(flatArr).toEqual(expectedArr)
    })
})
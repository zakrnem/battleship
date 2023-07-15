import { userBoard } from "./game";
import { arrayFromBoard } from "./printBoard";

describe('Flattens the grid object.', () => {
    const game = userBoard()
    const flatArr = arrayFromBoard(game.grid)
    const expectedArr = [
        'X', '_', '3', '_', '_', '_', '_', '_', '_', '_', '_',
        '_', '3', '_', '_', '_', '_', '_', '_', '_', '_', '_',
        '3', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_',
        '_', '_', '_', '_', '_', '5', '_', '_', '_', '_', '_',
        '_', '_', '_', '_', '5', '_', '_', '1', '1', '1', '1',
        '1', '_', 'X', '_', '_', '_', '_', '_', '_', '_', '_',
        '_', '_', '_', '_', '_', '_', '_', '4', '_', '_', '_',
        '_', '_', '_', '_', '_', '_', '4', '_', '2', '2', '2',
        '2', '_', '_', '_', '_', '4', '_', '_', '_', '_', '_',
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
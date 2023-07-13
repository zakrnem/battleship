import { game, userBoard } from './game'

describe('Creates player board successfully.', () => {
    const game = userBoard()
    test('Player board has the appropiate username.', () => {
        expect(game.user).toEqual('human')
    })
})
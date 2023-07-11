import { player } from './playerFactory'

describe('Creates new players.', () => {
  const player1 = player('human')
  const player2 = player('computer')
  test('Asigns a name to the players object.', () => {
    expect(player1.user).toEqual('human')
    expect(player2.user).toEqual('computer')
  })
  test('Builds the game logic for each player.', () => {
    expect(player1.game.ship1).toEqual(null)
    expect(player2.game.ship5).toEqual(null)
  })
})

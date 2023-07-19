import { buildBoard } from './game'

describe('Creates the game object with the two boards.', () => {
  const game = buildBoard()
  const grid1 = {
    1: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    2: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    3: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    4: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
    5: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
    6: { A: '_', B: '1', C: '1', D: '1', E: '1', F: '1', G: '_', H: '_', I: '_', J: '_' },
    7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    8: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    9: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '2', G: '2', H: '2', I: '2', J: '_' },
    10: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
  }
  const grid2 = {
    1: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '4', H: '_', I: '_', J: '_' },
    2: { A: '_', B: '2', C: '2', D: '2', E: '2', F: '_', G: '4', H: '_', I: '_', J: '_' },
    3: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '4', H: '_', I: '_', J: '_' },
    4: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
    5: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
    6: { A: '_', B: '1', C: '1', D: '1', E: '1', F: '1', G: '_', H: '_', I: '_', J: '3' },
    7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '3' },
    8: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '3' },
    9: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    10: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
  }

  test('The game object has the expected player board.', () => {
    expect(game.user.grid).toEqual(grid1)
  })
  test('The game object has the expected computer board.', () => {
    expect(game.computer.grid).toEqual(grid2)
  })
  test('The game object has the appropiate ship references.', () => {
    expect(game.user.ship1.length).toEqual(5)
    expect(game.computer.ship2.length).toEqual(4)
    expect(game.user.ship3.length).toEqual(3)
    expect(game.computer.ship4.length).toEqual(3)
    expect(game.user.ship5.length).toEqual(2)
  })
})

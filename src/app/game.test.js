import { userBoard, pcBoard } from './game'

describe('Creates player board successfully.', () => {
    const game = userBoard()
    const grid1 = {
        1: { A: 'X', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
        2: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
        3: { A: '_', B: '_', C: '3', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
        4: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
        5: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
        6: { A: '_', B: '1', C: '1', D: '1', E: '1', F: '1', G: '_', H: 'X', I: '_', J: '_' },
        7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
        8: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
        9: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '2', G: '2', H: '2', I: '2', J: '_' },
        10: { A: '_', B: '_', C: '_', D: '4', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    }
    test('Player board has the appropiate username.', () => {
        expect(game.user).toEqual('human')
    })
    test('Player board has the expected grid layout.', () => {
        expect(game.grid).toEqual(grid1)
    })
    test('Game object has the appropiate ship references.', () => {
        expect(game.ship1.length).toEqual(5)
        expect(game.ship2.length).toEqual(4)
        expect(game.ship3.length).toEqual(3)
        expect(game.ship4.length).toEqual(3)
        expect(game.ship5.length).toEqual(2)
    })
})

describe('Creates computer board successfully.', () => {
    const game = pcBoard()
    const grid1 = {
        1: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '4', H: '_', I: '_', J: '_' },
        2: { A: '_', B: '2', C: '2', D: '2', E: '2', F: '_', G: '4', H: '_', I: '_', J: '_' },
        3: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '4', H: '_', I: '_', J: '_' },
        4: { A: '_', B: '_', C: '_', D: '_', E: '_', F: 'X', G: '_', H: '_', I: '5', J: '_' },
        5: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '5', J: '_' },
        6: { A: '_', B: '1', C: '1', D: '1', E: '1', F: '1', G: '_', H: '_', I: '_', J: '3' },
        7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '3' },
        8: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: 'X', H: '_', I: '_', J: '3' },
        9: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
        10: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    }
    test('Player board has the appropiate username.', () => {
        expect(game.user).toEqual('computer')
    })
    test('Player board has the expected grid layout.', () => {
        expect(game.grid).toEqual(grid1)
    })
    test('Game object has the appropiate ship references.', () => {
        expect(game.ship1.length).toEqual(5)
        expect(game.ship2.length).toEqual(4)
        expect(game.ship3.length).toEqual(3)
        expect(game.ship4.length).toEqual(3)
        expect(game.ship5.length).toEqual(2)
    })
})
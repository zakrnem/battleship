import { ship, buildGrid, getPositionsArray, checkCoordinates } from "./app";

const ship1 = ship(2)
const ship2 = ship(5)
function executeMultipleTimes() {
    for(let i = 0; i < 4; i++) {
        ship2.hit()
    }
    return ship2.hit()
}

test(
    `A ship with a length of 2 doesn't sinks on the first attack.`,
    () => expect(ship1.hit()).toEqual(false))

test(
    'A ship with a length of 2 sinks on the second attack.',
    () => expect(ship1.hit()).toEqual(true))

test(
    'A ship with a length of 5 sinks after 5 attacks.',
    () => expect(executeMultipleTimes()).toEqual(true))

const board = buildGrid()
const boardResult = {
    1: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    2: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    3: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    4: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    5: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    6: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    8: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    9: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
    10: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_', I: '_', J: '_' },
}

test(
    'The gameboard grid is built sucessfully.',
    () => expect(board).toEqual(boardResult)
)

const start1 = ['B', 2]
const shipLength1 = 5
const positionsArray1 = [['B', 2], ['C', 2], ['D', 2], ['E', 2], ['F', 2]]
const shipLength2 = 4
const positionsArray2 = [['B', 2], ['B', 3], ['B', 4], ['B', 5]]

test(
    'Builds the ship positions array for horizontal orientation.',
    () => expect(getPositionsArray(shipLength1, start1, 'horizontal')).toEqual(positionsArray1)
)

test(
    'Builds the ship positions array for vertical orientation.',
    () => expect(getPositionsArray(shipLength2, start1, 'vertical')).toEqual(positionsArray2)
)

/* test(
    'Throws error when start position is invalid',
    () => expect(getPositionsArray().toThrow(Error))
) */

test(
    'Check coordinates function returns the same values when input is valid.',
    () => {
        expect(checkCoordinates('D', 10)).toEqual(['D', 10])
        expect(checkCoordinates('A', 5)).toEqual(['A', 5])
    }
)

test(
    'Check coordinates function returns null when input is illegal.',
    () => {
        expect(checkCoordinates('D', 0)).toEqual(null);
        expect(checkCoordinates('W', 4)).toEqual(null)
    }
)
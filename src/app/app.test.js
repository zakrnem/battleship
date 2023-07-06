import { ship } from "./app";
import { buildGrid } from "./app";

const ship1 = ship(2)
const ship2 = ship(5)
function executeMultipleTimes() {
    for(let i = 0; i < 4; i++) {
        ship2.hit()
    }
    return ship2.hit()
}
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
    `A ship with a length of 2 doesn't sinks on the first attack`,
    () => expect(ship1.hit()).toEqual(false))

test(
    'A ship with a length of 2 sinks on the second attack',
    () => expect(ship1.hit()).toEqual(true))

test(
    'A ship with a length of 5 sinks after 5 attacks',
    () => expect(executeMultipleTimes()).toEqual(true))

test(
    'The gameboard grid is built sucessfully',
    () => expect(board).toEqual(boardResult)
)


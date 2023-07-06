import { ship } from "./app";

const ship1 = ship(2)
const ship2 = ship(5)
function executeMultipleTimes() {
    for(let i = 0; i < 4; i++) {
        ship2.hit()
    }
    return ship2.hit()
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
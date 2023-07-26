import { game } from "./game";
import { randomShipsPlacement } from "./randomShipsPlacement";

//let board = game('return-board')
let output = randomShipsPlacement()

test(`Returns shipNumber value.`, () => {
    expect(typeof output.shipNum).toEqual('number')
    expect(output.shipNum).toBeGreaterThan(0)
    expect(output.shipNum).toBeLessThan(6)
})

test(`Returns startCoordinates array.`, () => {
    expect(typeof output.coordinates).toEqual('object')
    expect(output.coordinates.length).toEqual(2)
    expect(typeof output.coordinates[0]).toEqual('string')
    expect(typeof output.coordinates[1]).toEqual('number')
})

test(`Returns orientation string.`, () => {
    expect(output.orientation === 'horizontal' ||  output.orientation === 'vertical').toBeTruthy()
})

/* test(`Insert ship1 on the board.`, () => {
    expect(board.user.ship1).not.toEqual(null)
    expect(board.user.ship2).not.toEqual(null)
    expect(board.user.ship3).not.toEqual(null)
    expect(board.user.ship4).not.toEqual(null)
    expect(board.user.ship5).not.toEqual(null)
}) */
import { game } from "./game";

let board = game('return-board')

test(`Ship1 isn't null.`, () => {
    expect(board.user.ship1).not.toEqual(null)
})
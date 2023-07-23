import { isPlacementLegal } from "./isPlacementLegal";
import { game } from "./game";

/* test('Function returns false when ship placement causes an overlap of ships.', () => {
    game('initialize')
    game('insert-ship', ['B', 4], 'horizontal')
    let gameObj = game('return-board')
    expect(gameObj.user.isCellOccupied(['C', 4])).toEqual(true)
    expect(gameObj.user.isCellOccupied(['E', 4])).toEqual(true)
    expect(gameObj.user.isCellOccupied(['B', 5])).toEqual(false)
}) */

//isPlacementLegal(['A', 2], 4, 'vertical', 
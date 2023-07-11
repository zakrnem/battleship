import { checkCoordinates } from "./checkCoordinates"

describe('checkCoordinates: Checks whether a specific coordinate is inside the board.', () => {
    test('Check coordinates function returns the same values when input is valid.', () => {
      expect(checkCoordinates('D', 10)).toEqual(['D', 10])
      expect(checkCoordinates('A', 5)).toEqual(['A', 5])
    })
  
    test('Check coordinates function returns null when input is illegal.', () => {
      expect(checkCoordinates('D', 0)).toEqual(null)
      expect(checkCoordinates('W', 4)).toEqual(null)
      expect(checkCoordinates('A', 13)).toEqual(null)
      expect(checkCoordinates('F', 12)).toEqual(null)
    })
  })
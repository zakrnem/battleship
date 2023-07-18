import { getCoordinatesFromId } from './coordinateFromId'

test('A number input produces the desired coordinates format.', () => {
  expect(getCoordinatesFromId(10)).toEqual(['A', 2])
  expect(getCoordinatesFromId(57)).toEqual(['H', 6])
  expect(getCoordinatesFromId(1)).toEqual(['B', 1])
  expect(getCoordinatesFromId(0)).toEqual(['A', 1])
  expect(getCoordinatesFromId(6)).toEqual(['G', 1])
})

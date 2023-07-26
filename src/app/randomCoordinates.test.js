import { randomCoordinates } from "./randomCoordinates"

test('Output is an array with two items', () => {
  expect(typeof randomCoordinates()).toEqual('object')
  expect(randomCoordinates().length).toEqual(2)
})

test('Output array values have the expected properties.', () => {
  expect(typeof randomCoordinates()[0]).toEqual('string')
  expect(typeof randomCoordinates()[1]).toEqual('number')
  expect(randomCoordinates()[1]).toBeGreaterThan(0)
  expect(randomCoordinates()[1]).toBeLessThan(11)
})

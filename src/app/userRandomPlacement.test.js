import { shipsPlacementInputs } from './userRandomPlacement'

let output = shipsPlacementInputs()

test(`Returns startCoordinates array.`, () => {
  expect(typeof output.coordinates).toEqual('object')
  expect(output.coordinates.length).toEqual(2)
  expect(typeof output.coordinates[0]).toEqual('string')
  expect(typeof output.coordinates[1]).toEqual('number')
})

test(`Returns orientation string.`, () => {
  expect(output.orientation === 'horizontal' || output.orientation === 'vertical').toBeTruthy()
})

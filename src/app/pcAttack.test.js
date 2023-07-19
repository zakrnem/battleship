import { generateAttackCoordinates } from './pcAttack'

test('Output is an array with two items', () => {
  expect(typeof generateAttackCoordinates()).toEqual('object')
  expect(generateAttackCoordinates().length).toEqual(2)
})

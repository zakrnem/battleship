import { pcAttack } from './pcAttack'

test('Output is an array with two items', () => {
  expect(typeof pcAttack()).toEqual('object')
  expect(pcAttack().length).toEqual(2)
})

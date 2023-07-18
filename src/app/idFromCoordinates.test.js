import { idFromCoordinates } from './idFromCoordinates'

test('A coordinate produces the desired id string', () => {
  expect(idFromCoordinates(['A', 1], 'pc')).toEqual('pc0')
  expect(idFromCoordinates(['B', 1], 'pc')).toEqual('pc1')
  expect(idFromCoordinates(['A', 2], 'pc')).toEqual('pc10')
  expect(idFromCoordinates(['G', 1], 'pc')).toEqual('pc6')
  expect(idFromCoordinates(['G', 8], 'pc')).toEqual('pc76')
  expect(idFromCoordinates(['F', 4], 'pc')).toEqual('pc35')
  expect(idFromCoordinates(['A', 8], 'user')).toEqual('user70')
})

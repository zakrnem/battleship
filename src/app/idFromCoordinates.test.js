import { idFromCoordinates } from "./idFromCoordinates";

test('A coordinate produces the desired id string', () => {
    expect(idFromCoordinates(['A', 1])).toEqual('pc0')
    expect(idFromCoordinates(['B', 1])).toEqual('pc1')
    expect(idFromCoordinates(['A', 2])).toEqual('pc10')
    expect(idFromCoordinates(['G', 1])).toEqual('pc6')
    expect(idFromCoordinates(['G', 8])).toEqual('pc76')
    expect(idFromCoordinates(['F', 4])).toEqual('pc35')
    expect(idFromCoordinates(['A', 8])).toEqual('pc70')
})
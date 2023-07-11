import { gameboard } from './gameFactory'

export function player(playerName) {
  return {
    game: gameboard(),
    user: playerName,
  }
}

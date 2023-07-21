import { gameboard } from './gameFactory'
import { gameMessages } from './gameMessages'
import { insertShip } from './insertShip'
import { insertBoard } from './printBoard'
import { makeUserAttack } from './userAttack'
import { makePcAttack } from './pcAttack'
import { placeShipListener } from './placeShips'


const board = buildBoard()
let shipNumber = 1

export function game(typeOfOperation, attackCoordinates, orientation) {
  if (typeOfOperation === 'initialize') {
    insertBoard('user', board.user)
    placeShipListener()
    gameMessages('initialize', board)
  }
  if (typeOfOperation === 'attack-oponent') {
    makeUserAttack(board, attackCoordinates)
  }
  if (typeOfOperation === 'receive-attack') {
    makePcAttack(board)
  }
  if (typeOfOperation === 'insert-ship') {
    insertShip(board.user, shipNumber++, attackCoordinates, orientation)
  }
}

export function buildBoard() {
  const game = {
    user: gameboard(),
    computer: gameboard(),
  }
  //Build initial user board
  /* insertShip(game.user, 1, ['B', 6], 'horizontal')
  insertShip(game.user, 2, ['F', 9], 'horizontal')
  insertShip(game.user, 3, ['C', 1], 'vertical')
  insertShip(game.user, 4, ['D', 8], 'vertical')
  insertShip(game.user, 5, ['I', 4], 'vertical') */

  //Build initial computer board
  insertShip(game.computer, 1, ['B', 6], 'horizontal')
  insertShip(game.computer, 2, ['B', 2], 'horizontal')
  insertShip(game.computer, 3, ['J', 6], 'vertical')
  insertShip(game.computer, 4, ['G', 1], 'vertical')
  insertShip(game.computer, 5, ['I', 4], 'vertical')

  return game
}

import { gameboard } from './gameFactory'
import { insertShip } from './insertShip'
import { insertBoard } from './printBoard'
import { makeUserAttack } from './userAttack'
import { makePcAttack } from './pcAttack'
import { placeShipListener } from './placeShips'
import { gameMessages } from './gameMessages'

const board = buildBoard()
let shipNumber = 1

export function game(typeOfOperation, coordinates, orientation) {
  if (typeOfOperation === 'initialize') {
    insertBoard('user', board.user)
    placeShipListener()
    gameMessages('initialize', board)
  }
  if (typeOfOperation === 'attack-oponent') {
    makeUserAttack(board, coordinates)
  }
  if (typeOfOperation === 'receive-attack') {
    makePcAttack(board)
  }
  if (typeOfOperation === 'insert-ship') {
    try {
      insertShip(board.user, shipNumber++, coordinates, orientation)
      return true
    } catch (error) {
      console.log(error)
      shipNumber--
      return false
    }
  }
  if (typeOfOperation === 'return-board') {
    return board
  }
}

export function buildBoard() {
  const game = {
    user: gameboard(),
    computer: gameboard(),
  }

  //Build initial computer board
  insertShip(game.computer, 1, ['B', 6], 'horizontal')
  insertShip(game.computer, 2, ['B', 2], 'horizontal')
  insertShip(game.computer, 3, ['J', 6], 'vertical')
  insertShip(game.computer, 4, ['G', 1], 'vertical')
  insertShip(game.computer, 5, ['I', 4], 'vertical')

  return game
}

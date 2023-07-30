import { gameboard } from './gameFactory'
import { insertShip } from './insertShip'
import { makeUserAttack } from './userAttack'
import { makePcAttack } from './pcAttack'
import { initializeGame } from './placeShips'

const board = buildBoard()
let userShipNumber = 1
let pcShipNumber = 1

export function game(typeOfOperation, coordinates, orientation) {
  if (typeOfOperation === 'initialize') {
    initializeGame()
  }
  if (typeOfOperation === 'attack-oponent') {
    makeUserAttack(board, coordinates)
  }
  if (typeOfOperation === 'receive-attack') {
    makePcAttack(board)
  }
  if (typeOfOperation === 'insert-user-ship') {
    try {
      insertShip(board.user, userShipNumber++, coordinates, orientation)
      return true
    } catch (error) {
      userShipNumber--
      //console.log(error)
      return false
    }
  }
  if (typeOfOperation === 'insert-computer-ship') {
    try {
      insertShip(board.computer, pcShipNumber++, coordinates, orientation)
      return true
    } catch (error) {
      pcShipNumber--
      //console.log(error)
      return false
    }
  }
  if (typeOfOperation === 'return-board') {
    return board
  }
}

export function buildBoard() {
  return {
    user: gameboard(),
    computer: gameboard(),
  }
}

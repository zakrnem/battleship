import { gameboard } from './gameFactory'
import { gameMessages } from './reportPlayerTurn'
import { insertShip } from './insertShip'
import { insertBoard } from './printBoard'
import { reportAllShipsSunk } from './reportAllShipsSunk'
import { paintCell } from './paintCell'
import { pcAttack } from './pcAttack'

const board = buildBoard()

export function game(typeOfOperation, attackCoordinates) {
  let hitShot
  if (typeOfOperation === 'initialize') {
    insertBoard('user', board.user)
    insertBoard('pc', board.computer)
  }
  if (typeOfOperation === 'attack-oponent') {
    hitShot = board.computer.receiveAttack(attackCoordinates)
    paintCell(attackCoordinates, 'pc', hitShot)
    reportAllShipsSunk(board.computer)
    game('receive-attack')
  }
  if (typeOfOperation === 'receive-attack') {
    setTimeout(() => {
      attackCoordinates = pcAttack()
      hitShot = board.user.receiveAttack(attackCoordinates)
      paintCell(attackCoordinates, 'user', hitShot)
      reportAllShipsSunk(board.user)
    }, 600)
  }

  gameMessages(board)
}

export function buildBoard() {
  const game = {
    user: gameboard(),
    computer: gameboard(),
  }
  //Build initial user board
  insertShip(game.user, 1, ['B', 6], 'horizontal')
  insertShip(game.user, 2, ['F', 9], 'horizontal')
  insertShip(game.user, 3, ['C', 1], 'vertical')
  insertShip(game.user, 4, ['D', 8], 'vertical')
  insertShip(game.user, 5, ['I', 4], 'vertical')
  game.user.receiveAttack(['A', 1])
  game.user.receiveAttack(['H', 6])

  //Build initial computer board
  insertShip(game.computer, 1, ['B', 6], 'horizontal')
  insertShip(game.computer, 2, ['B', 2], 'horizontal')
  insertShip(game.computer, 3, ['J', 6], 'vertical')
  insertShip(game.computer, 4, ['G', 1], 'vertical')
  insertShip(game.computer, 5, ['I', 4], 'vertical')
  game.computer.receiveAttack(['F', 4])
  game.computer.receiveAttack(['G', 8])

  return game
}

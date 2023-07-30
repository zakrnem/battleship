import { boardDisabler } from './boardDisabler'
import { game } from './game'
import { deactivateMessageRemoval } from './placeShips'
import { arrayFromBoard } from './printBoard'

export function reportAllShipsSunk(board, playerString) {
  let boolean
  let message
  if (playerString === 'user') {
    boolean = board.user.allShipsSunk()
    message = document.getElementById('user-message')
  } else {
    boolean = board.computer.allShipsSunk()
    message = document.getElementById('pc-message')
  }
  if (boolean === true) {
    deactivateMessageRemoval()
    message.textContent = 'All ships have sunk'
    boardDisabler('write')
    reportNumberOfAttacks()
    return
  }
}

function reportNumberOfAttacks() {
  let gameboard = game('return-board')

  let userArray = arrayFromBoard(gameboard.user.grid)
  let userAttacks = 0
  userArray.forEach((el) => {
    if (el === 'X') userAttacks++
  })

  let computerArray = arrayFromBoard(gameboard.computer.grid)
  let computerAttacks = 0
  computerArray.forEach((el) => {
    if (el === 'X') computerAttacks++
  })

  console.log('user-board: ', userAttacks, ' computer-board: ', computerAttacks)
}

import { boardDisabler } from './boardDisabler'
import { game } from './game'
import { arrayFromBoard } from './printBoard'

export function reportAllShipsSunk(board) {
  const boolean = board.allShipsSunk()
  if (boolean === true) {
    const pcMessage = document.getElementById('pc-message')
    pcMessage.textContent = 'All ships have sunk'
    boardDisabler('write')
    reportNumberOfAttacks()
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

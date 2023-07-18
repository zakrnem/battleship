export function reportAllShipsSunk(board) {
  const boolean = board.allShipsSunk()
  if (boolean === true) {
    const pcMessage = document.getElementById('pc-message')
    pcMessage.textContent = 'All ships have sunk'
    boardDisabler('write')
  }
}

let disable = -1

export function boardDisabler(typeOfOperation) {
  if (typeOfOperation === 'write') {
    disable *= -1
  }
  if (typeOfOperation === 'read') {
    return disable
  }
}
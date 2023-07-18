export function reportStatus(board) {
  const boolean = board.allShipsSunk()
  if (boolean === true) {
    const pcMessage = document.getElementById('pc-message')
    pcMessage.textContent = 'All ships have sunk'
  }
}

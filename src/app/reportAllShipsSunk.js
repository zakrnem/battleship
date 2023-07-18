export function reportAllShipsSunk(board) {
  const boolean = board.allShipsSunk()
  if (boolean === true) {
    const pcMessage = document.getElementById('pc-message')
    pcMessage.textContent = 'All ships have sunk'
  }
}

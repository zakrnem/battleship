import { idFromCoordinates } from './idFromCoordinates'

export function paintCell(coordinates, playerString, shotStatus) {
  const cellId = idFromCoordinates(coordinates, playerString)
  const cell = document.getElementById(cellId)
  if (shotStatus === true) {
    cell.style.backgroundColor = 'var(--hit-shot)'
  }
  if (shotStatus === false) {
    cell.style.backgroundColor = 'var(--missed-shot)'
  }
  if (shotStatus === 'previously-attacked') {
    throw new Error('Cell has already been attacked')
  }
}

export function paintUserCell(typeOfOperation, cell, orientation, currLength) {
  let cellColor
  if (cell !== null) {
    if (typeOfOperation === 'place-ship') {
      placeShipPaint(cell, orientation, currLength)
    }
    if (cell.getAttribute('status') !== 'occupied') {
      switch (true) {
        case typeOfOperation === 'remove-ship':
          cellColor = ''
          break
        case typeOfOperation === 'temp-ship':
          cellColor = 'var(--mouseover)'
          break
      }
    }
    cell.style.backgroundColor = cellColor
  }
}

function placeShipPaint(cell, orientation, currLength) {
  let startIdNumber = parseInt(cell.id.match(/\d+/g))
  let idSum = (orientation === 'horizontal') ? 1 : 10
  for (let i = 1; i < currLength; i++) {
    startIdNumber += idSum
    const cellID = 'user' + startIdNumber
    let currCell = document.getElementById(cellID)
    currCell.setAttribute('status', 'occupied')
    currCell.style.backgroundColor = 'var(--ship-color)'
  }
  let startCell = document.getElementById(cell.id)
  startCell.setAttribute('status', 'occupied')
  startCell.style.backgroundColor = 'var(--ship-color)'
}
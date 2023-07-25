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

export function paintUserCell(typeOfOperation, cell) {
  let cellColor
  if (cell !== null) {
    if (typeOfOperation === 'place-ship') {
      cellColor = 'var(--ship-color)'
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

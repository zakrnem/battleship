import { idFromCoordinates } from './idFromCoordinates'

export function paintCell(coordinates, playerString, hitShot) {
  const cellId = idFromCoordinates(coordinates, playerString)
  const cell = document.getElementById(cellId)
  if (cell.style.backgroundColor !== 'var(--hit-shot)') {
    if (hitShot) {
      cell.style.backgroundColor = 'var(--hit-shot)'
    } else {
      cell.style.backgroundColor = 'var(--missed-shot)'
    }
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
            case (typeOfOperation === 'remove-ship'):
                cellColor = ''
                break
            case (typeOfOperation === 'temp-ship'):
                cellColor = 'var(--mouseover)'
                break
        }
    }
    cell.style.backgroundColor = cellColor
  }  
}
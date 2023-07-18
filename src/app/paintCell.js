import { idFromCoordinates } from './idFromCoordinates'

export function paintCell(coordinates, playerString) {
  const cellId = idFromCoordinates(coordinates, playerString)
  const cell = document.getElementById(cellId)
  if (cell !== null) {
    if (cell.style.backgroundColor === 'var(--ship-color)') {
      cell.style.backgroundColor = 'var(--hit-shot)'
    } else {
      cell.style.backgroundColor = 'var(--missed-shot)'
    }
  }
}

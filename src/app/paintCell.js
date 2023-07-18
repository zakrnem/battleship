import { idFromCoordinates } from './idFromCoordinates'

export function paintCell(coordinates, playerString, hitShot) {
  const cellId = idFromCoordinates(coordinates, playerString)
  const cell = document.getElementById(cellId)
  if (cell !== null) {
    if (hitShot) {
      cell.style.backgroundColor = 'var(--hit-shot)'
    } else {
      cell.style.backgroundColor = 'var(--missed-shot)'
    }
  }
}

export function pcAttack() {
  const randomNumber = Math.floor(Math.random() * 10)
  const letterCoordinate = String.fromCharCode(65 + randomNumber)
  const numberCoordinate = Math.floor(Math.random() * 10)
  return [letterCoordinate, numberCoordinate]
}

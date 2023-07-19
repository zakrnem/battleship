export function pcAttack() {
  const randomNumber = Math.floor(Math.random() * 10)
  const letterCoordinate = String.fromCharCode(65 + randomNumber)
  const numberCoordinate = Math.floor((Math.random() * 9) + 1)
  return [letterCoordinate, numberCoordinate]
}

export function makePcAttack (attackCoordinates, board) {
  let hitShot;
  let counter = 0
  while (counter < 3) {
    counter++
    try {
      hitShot = board.user.receiveAttack(attackCoordinates);
      break
    } catch (error) {
      console.log(error);
    }
    return hitShot
  }
}
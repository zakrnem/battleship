export function idFromCoordinates(coordinates, playerString) {
  const letterCoordinate = coordinates[0]
  const numberCoordinate = coordinates[1]

  let digit1 = numberCoordinate - 1
  let digit2 = letterCoordinate.charCodeAt() - 65

  let result

  if (digit1 === 0) {
    result = playerString + digit2
  } else {
    result = playerString + digit1 + digit2
  }
  return result
}

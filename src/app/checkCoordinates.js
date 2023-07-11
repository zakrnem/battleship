export function checkCoordinates(letterCoordinate, numberCoordinate) {
    letterCoordinate =
      letterCoordinate.charCodeAt() < 65 || letterCoordinate.charCodeAt() > 74
        ? null
        : letterCoordinate
    numberCoordinate = numberCoordinate > 10 || numberCoordinate < 1 ? null : numberCoordinate
    return letterCoordinate === null || numberCoordinate === null
      ? null
      : [letterCoordinate, numberCoordinate]
}
export function idFromCoordinates(coordinates) {
    const letterCoordinate = coordinates[0]
    const numberCoordinate = coordinates[1]

    let digit1 = letterCoordinate.charCodeAt() - 65
    let digit2 = numberCoordinate - 1
    let result

    if (digit1 === 0) {
        result = 'pc' + digit2
    } else {
        result = 'pc' + digit2.toString() + digit1.toString()
    }
    return result
}
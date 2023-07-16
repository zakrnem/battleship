export function paintAttackedShip(coordinates) {
    //DOM calls are making tests fail
    const cellId = idFromCoordinates(coordinates)
    const cell = document.getElementById(cellId)
    cell.style.backgroundColor = 'var(--hit-shot)'
}

export function idFromCoordinates(coordinates) {
    const letterCoordinate = coordinates[0]
    const numberCoordinate = coordinates[1]

    let digit1 = numberCoordinate - 1
    let digit2 = letterCoordinate.charCodeAt() - 65

    let result

    if (digit1 === 0) {
        result = 'pc' + digit2
    } else {
        result = 'pc' + digit1 + digit2
    }
    return result
}
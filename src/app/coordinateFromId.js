export function getCoordinatesFromId(idNumber) {
    const idNumberArray = idNumber.toString().split('')
    let numberCoordinate
    let letterCoordinate
    if (idNumberArray.length < 2) {
        numberCoordinate = 1
        letterCoordinate = String.fromCharCode(65 + parseInt(idNumberArray[0]))
    } else {
        numberCoordinate = parseInt(idNumberArray[0]) + 1
        letterCoordinate = String.fromCharCode(65 + parseInt(idNumberArray[1]))
    }
    return [letterCoordinate, numberCoordinate]
}
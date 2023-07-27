import { randomCoordinates } from "./randomCoordinates";
import { game } from "./game";
import { getPositionsArray } from "./getPositionsArray";
import { idFromCoordinates } from "./idFromCoordinates";

let count = 1

export function randomShipsPlacement() {
    if (count <= 5) {
        let startCoordinates = randomCoordinates()
        let randomNumber = Math.floor(Math.random() * 2)
        let orientationString = randomNumber === 1 ? 'horizontal' : 'vertical'
        let shipNumber = count++
        return {
            shipNum: shipNumber,
            coordinates: startCoordinates,
            orientation: orientationString,
        }
    } else {
        throw new Error ('All ships have already been inserted.')
    }
}

function checkPlacementLegality() {
    let randomPlacement = randomShipsPlacement()
    const length = ['', 5, 4, 3, 3, 2]
    //console.log(randomPlacement)
    let shipNumber = length[randomPlacement.shipNum]
    let startCoordinates = randomPlacement.coordinates
    let orientation = randomPlacement.orientation
    let positionsArray 
    try {
        positionsArray = getPositionsArray(shipNumber, startCoordinates, orientation)
        return [randomPlacement.coordinates, randomPlacement.orientation]
    } catch (error) {
        count--
        checkPlacementLegality()
    }
    
}

export function checkPlacementOnBoard() {
    let randomPlacement = checkPlacementLegality()
    try {
        game('insert-ship', randomPlacement[0], randomPlacement[1])
        paintRandomCell(randomPlacement)
        console.log(game('return-board').user)
    } catch (error) {
        count--
        checkPlacementOnBoard()
    }
}

function paintRandomCell(randomPlacement) {
    let startCoordinates = randomPlacement[0]
    let orientation = randomPlacement[1]
    let startID = idFromCoordinates(startCoordinates, 'user')
    let startCell = document.getElementById(startID)
    paintUserCell('place-ship', startCell, orientation, currLength)
}
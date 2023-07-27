import { randomCoordinates } from "./randomCoordinates";
import { game } from "./game";
import { getPositionsArray } from "./getPositionsArray";
import { idFromCoordinates } from "./idFromCoordinates";
import { paintUserCell } from "./paintCell";

let count = 1
const ships = [5, 4, 3, 3, 2]

export function randomShipsPlacement() {
    //console.log(count)
    if (count <= 5) {
        let startCoordinates = randomCoordinates()
        let randomNumber = Math.floor(Math.random() * 2)
        let orientationString = randomNumber === 1 ? 'horizontal' : 'vertical'
        let shipNumber = count
        return {
            shipNum: shipNumber,
            coordinates: startCoordinates,
            orientation: orientationString,
        }
    } else {
        throw new Error ('All ships have already been inserted.')
    }
}

export function checkPlacementOnBoard() {
    //let randomPlacement = checkPlacementLegality()
    let randomPlacement = randomShipsPlacement()
    console.log(randomPlacement.coordinates)
    const currLength = ships[0]
    console.log(currLength)

    try {
        let sucess = game('insert-ship', randomPlacement.coordinates, randomPlacement.orientation)
        if (sucess) {
            paintRandomCell(randomPlacement, currLength)
            ships.shift()
            count++
        } 
    } catch (error) {
        console.log(error)
        //checkPlacementOnBoard()
    }
}

function paintRandomCell(randomPlacement, currLength) {
    let startCoordinates = randomPlacement.coordinates
    let orientation = randomPlacement.orientation
    let startID = idFromCoordinates(startCoordinates, 'user')
    let startCell = document.getElementById(startID)
    paintUserCell('place-ship', startCell, orientation, currLength)
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
import { randomCoordinates } from "./randomCoordinates";
import { game } from "./game";

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
    }
}


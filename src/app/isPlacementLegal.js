import { getPositionsArray } from "./getPositionsArray";
import { game } from "./game";

export function isPlacementLegal (startCoordinates, length, orientationString, gameObj) {
    const positionsArray = getPositionsArray(length, startCoordinates, orientationString)
    positionsArray.forEach((coordinates) => {
        let isCellOccupied = gameObj.user.isCellOccupied(coordinates)
        return isCellOccupied ? false : true
      })
}
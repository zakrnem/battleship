import { getCoordinatesFromId } from "./app/coordinateFromId"
import { game } from "./app/game"

export function boardsListener() {
    boardListener()
}

function boardListener() {
    const pcBoard = document.querySelector('.pc-board')
    pcBoard.addEventListener('mouseover', (e) => {
        if (e.target.style.backgroundColor === '') {
            e.target.style.transition = "background-color 0.2s ease-in"
            e.target.style.backgroundColor = 'var(--mouseover)'
            setTimeout(() => {
                e.target.style.transition = "background-color 0.2s ease-in"
                e.target.style.backgroundColor = ''
            }, 300)
        }
    })
    pcBoard.addEventListener('click', (e) => {
        if (e.target.style.backgroundColor !== 'var(--ship-color)') {
            const idNumber = parseInt(e.target.id.match(/\d+/)[0])
            const attackCoordinates = getCoordinatesFromId(idNumber)
            game('attack', attackCoordinates)
            e.target.style.backgroundColor = 'var(--attack-color)'
        }
    })
}


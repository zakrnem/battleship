import { pcBoardListener } from "./pcBboardListener"

const ships = [5, 4, 3, 3, 2]
let tempCells = []
let counter = 0
let orientation = 1
let cellSum = 1

export function placeShipListener() {
    const userBoard = document.querySelector('.user-board')
    userBoard.addEventListener('click', (e) => placeShip(e))
    userBoard.addEventListener('mouseover', (e) => {
        if (counter === 0) orientationMessage()
        counter++
        placeShipTemp(e)
    })   
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Space') {
            orientation *= -1
            if (orientation === -1) {
                cellSum = 10
            } else {
                cellSum = 1
            }
        }  
    })
}

function placeShipTemp(e) {
    if (e.target.id !== 'occupied' &&
    ships.length > 0) {
        removeShipTemp(e)
        const currLength = ships[0]
        const startID = e.target.id
        let startIdNumber = parseInt(startID.match(/\d+/g))

        tempCells = []
        tempCells.push(startID)
        
        for (let i = 1; i < currLength; i++) {
            startIdNumber += cellSum
            const cellID = 'user' + startIdNumber
            tempCells.push(cellID)
            let cell = document.getElementById(cellID)
            if(cell !== null) {
                cell.style.backgroundColor = 'var(--mouseover)'
            }
        }
        e.target.style.backgroundColor = 'var(--mouseover)'
    } else {
        orientationMessage('remove')
        pcBoardListener()
    }
}

function placeShip(e) {
    if (e.target.id !== 'occupied' &&
    ships.length > 0) {
        const currLength = ships.shift()
        const startID = e.target.id
        let startIdNumber = parseInt(startID.match(/\d+/g))

        for (let i = 1; i < currLength; i++) {
            startIdNumber += cellSum
            const cellID = 'user' + startIdNumber
            let cell = document.getElementById(cellID)
            cell.id = 'occupied'
            cell.style.backgroundColor = 'var(--ship-color)'
        }
        let startCell = document.getElementById(startID)
        startCell.id = 'occupied'
        e.target.style.backgroundColor = 'var(--ship-color)'
    }
}

function removeShipTemp() {
    const length = tempCells.length
    for (let i = 0; i < length; i++) {
        const cellID = tempCells.shift()
        let cell = document.getElementById(cellID)
        if(cell !== null) {
            cell.style.backgroundColor = ''
        }
    }
}

function orientationMessage(remove) {
    const userMessage = document.getElementById('user-message')
    userMessage.textContent = 'Press "Space" to change ship orientation'
    if (remove === 'remove') userMessage.textContent = ''
}
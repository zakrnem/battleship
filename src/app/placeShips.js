export function placeShipListener() {
    const userBoard = document.querySelector('.user-board')
    userBoard.addEventListener('click', (e) => placeShip(e))
    userBoard.addEventListener('mouseover', (e) => placeShipTemp(e))   
}

const ships = [5, 4, 3, 3, 2]
let tempCells = []

function placeShipTemp(e) {
    if (e.target.id !== 'occupied') {
        removeShipTemp(e)
        const currLength = ships[0]
        const startID = e.target.id
        let startIdNumber = startID.match(/\d+/g)

        tempCells = []
        tempCells.push(startID)
        
        for (let i = 1; i < currLength; i++) {
            const cellID = 'user' + ++startIdNumber
            tempCells.push(cellID)
            let cell = document.getElementById(cellID)
            if(cell !== null) {
                cell.style.backgroundColor = 'var(--mouseover)'
            }
        }
        e.target.style.backgroundColor = 'var(--mouseover)'
    }
}

function placeShip(e) {
    if (e.target.id !== 'occupied' &&
    ships.length > 0) {
        const currLength = ships.shift()
        const startID = e.target.id
        let startIdNumber = startID.match(/\d+/g)

        for (let i = 1; i < currLength; i++) {
            const cellID = 'user' + ++startIdNumber
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


export function placeShipListener() {
    const userBoard = document.querySelector('.user-board')
    userBoard.addEventListener('mouseover', (e) => placeShipTemp(e))
    userBoard.addEventListener('mouseleave', (e) => removeShipTemp())
    //userBoard.addEventListener('click', (e) => placeShip(e))
}

const ships = [5, 4, 3, 3, 2]
let tempCells = []

function placeShipTemp(e) {
    removeShipTemp()
    const currLength = ships[0]
    const startID = e.target.id
    let startIdNumber = startID.match(/\d+/g)

    tempCells = []
    tempCells.push(startID)
    
    for (let i = 1; i < currLength; i++) {
        const cellID = 'user' + ++startIdNumber
        tempCells.push(cellID)
        let cell = document.getElementById(cellID)
        cell.style.backgroundColor = 'var(--ship-color)'
    }

    e.target.style.backgroundColor = 'var(--ship-color)'
}

function removeShipTemp() {
    const length = tempCells.length
    for (let i = 0; i < length; i++) {
        const cellID = tempCells.shift()
        let cell = document.getElementById(cellID)
        cell.style.backgroundColor = ''
    }
}
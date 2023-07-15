import { userBoard, pcBoard } from "./game";

export function arrayFromBoard(board) {
    const output = []
    for (let key1 in board) {
        const arr = board[key1]
        for(let key2 in arr) {
            output.push(arr[key2])
        }
    }
    return output
}

export function insertUserBoard() {
    const userGrid = userBoard().grid
    const boardArray = arrayFromBoard(userGrid)
    const DOMgrid = document.querySelectorAll('.user.cell')

    for (let i = 0; i < 100; i++) {
        const ObjCell = boardArray[i]
        const ObjCellNumber = parseInt(ObjCell)
        const DOMcell = DOMgrid[i]

        if (!isNaN(ObjCellNumber)) {
            DOMcell.style.backgroundColor = 'blue'
        }
        if (ObjCell === 'X') {
            DOMcell.style.backgroundColor = 'red'
        }   
    }
}

export function insertComputerBoard() {
    const pcGrid = pcBoard().grid
    const boardArray = arrayFromBoard(pcGrid)
    const DOMgrid = document.querySelectorAll('.pc.cell')

    for (let i = 0; i < 100; i++) {
        const ObjCell = boardArray[i]
        const ObjCellNumber = parseInt(ObjCell)
        const DOMcell = DOMgrid[i]

        if (!isNaN(ObjCellNumber)) {
            DOMcell.style.backgroundColor = 'var(--ship-color)'
        }
        if (ObjCell === 'X') {
            DOMcell.style.backgroundColor = 'red'
        }   
    }
}
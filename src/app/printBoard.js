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

export function insertBoards() {
    insertBoard('user')
    insertBoard('pc')
}

function insertBoard(boardSelector) {
    let boardArray
    let DOMgrid

    if (boardSelector === 'user') {
        boardArray = arrayFromBoard(userBoard().grid)
        DOMgrid = document.querySelectorAll('.user.cell')
    } else {
        boardArray = arrayFromBoard(pcBoard().grid)
        DOMgrid = document.querySelectorAll('.pc.cell')
    }
    for (let i = 0; i < 100; i++) {
        const ObjCell = boardArray[i]
        const ObjCellNumber = parseInt(ObjCell)
        const DOMcell = DOMgrid[i]

        if (!isNaN(ObjCellNumber)) {
            DOMcell.style.backgroundColor = 'var(--ship-color)'
        }
        if (ObjCell === 'X') {
            DOMcell.style.backgroundColor = 'var(--attack-color'
        }   
    }
}
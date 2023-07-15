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

export function insertBoard(boardSelector, board) {
    const boardArray = arrayFromBoard(board.grid)
    const DOMgrid = document.querySelectorAll(`.${boardSelector}.cell`)

    for (let i = 0; i < 100; i++) {
        const ObjCell = boardArray[i]
        const ObjCellNumber = parseInt(ObjCell)
        const DOMcell = DOMgrid[i]

        if (!isNaN(ObjCellNumber)) {
            DOMcell.style.backgroundColor = 'var(--ship-color)'
        }
        if (ObjCell === 'X') {
            DOMcell.style.backgroundColor = 'var(--attack-color)'
        }   
    }
}
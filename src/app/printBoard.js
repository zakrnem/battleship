import { userBoard, pcBoard } from "./game";

export function printUserBoard(board) {
    //const board = document.querySelectorAll('.user.cell')
    const output = []
    for (let key1 in board) {
        const arr = board[key1]
        for(let key2 in arr) {
            output.push(arr[key2])
        }
    }
    return output
}
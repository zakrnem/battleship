export function userBoardListener() {
    const board = document.querySelector('.user-board')
    board.addEventListener('mouseover', (e) => {
        e.target.style.transition = "background-color 0.2s ease-in"
        e.target.style.backgroundColor = '#d4d4c0'
        setTimeout(() => {
            e.target.style.transition = "background-color 0.2s ease-in"
            e.target.style.backgroundColor = ''
        }, 600)
    })
}

export function pcBoardListener() {
    const board = document.querySelector('.pc-board')
    board.addEventListener('mouseover', (e) => {
        e.target.style.transition = "background-color 0.2s ease-in"
        e.target.style.backgroundColor = '#d4d4c0'
        setTimeout(() => {
            e.target.style.transition = "background-color 0.2s ease-in"
            e.target.style.backgroundColor = ''
        }, 600)
    })
}
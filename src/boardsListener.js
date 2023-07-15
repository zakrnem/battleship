export function userBoardListener() {
    mouseover('user')
}

export function pcBoardListener() {
    mouseover('pc')
}

function mouseover(boardSelector) {
    boardSelector = (boardSelector === 'user') ? '.user-board' : '.pc-board'
    const board = document.querySelector(boardSelector)
    board.addEventListener('mouseover', (e) => {
        if (e.target.style.backgroundColor === '') {
            e.target.style.transition = "background-color 0.2s ease-in"
            e.target.style.backgroundColor = 'var(--mouseover)'
            setTimeout(() => {
                e.target.style.transition = "background-color 0.2s ease-in"
                e.target.style.backgroundColor = ''
            }, 300)
        }
    })
}

function click(boardSelector) {
    boardSelector = (boardSelector === 'user') ? '.user-board' : '.pc-board'
    const board = document.querySelector(boardSelector)
    board.addEventListener('click', (e) => {
        if (e.target.style.backgroundColor === '') {
        }
    })
}
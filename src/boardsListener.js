export function boardsListener() {
    boardListener('user')
    boardListener('pc')
}

function boardListener(boardSelector) {
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
    board.addEventListener('click', (e) => {
        //Player board shouldn't receive attacks from clicks
        if (e.target.style.backgroundColor !== 'var(--ship-color)') {
            e.target.style.backgroundColor = 'var(--attack-color)'
        }
    })
}
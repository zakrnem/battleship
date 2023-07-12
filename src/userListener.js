export function userBoardListener() {
    const board = document.querySelector('.user-board')
    board.addEventListener('mouseover', (e) => {
        e.target.style.transition = "background-color 0.5s ease-in"
        e.target.style.backgroundColor = '#2b2b1a'
        setTimeout(() => {
            e.target.style.transition = "background-color 0.5s ease-in"
            e.target.style.backgroundColor = ''
        }, 500)
    })
}
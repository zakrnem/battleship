export function reportStatus(boolean) {
    //We could add a remaining ships notification checking for the status
    //Of each ship after every attack
    if(boolean === true) {
        const pcMessage = document.getElementById('pc-alive-ships')
        pcMessage.textContent = 'All ships have been sunk'
    }
}
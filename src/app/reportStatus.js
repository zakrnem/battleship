export function reportStatus(boolean) {
    if(boolean === true) {
        const pcMessage = document.getElementById('pc-alive-ships')
        pcMessage.textContent = 'All ships have been sunk'
    }
}
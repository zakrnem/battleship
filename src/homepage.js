import { footer } from "footer-zkrnem";

export function homepage() {
    footer()
    
    const content = document.getElementById('content')
    const title = document.createElement('p')
    title.textContent = 'Battleship Game'
    content.append(title)
}
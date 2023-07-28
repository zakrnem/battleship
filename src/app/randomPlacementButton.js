export function randomPlacementButton(remove) {
    let header = document.querySelector('.header')
    if (!remove) {
        let randomButton = document.createElement('button')
        randomButton.id = 'random-insert'
        randomButton.textContent = 'Insert ships randomly'
        header.append(randomButton)
    } else {
        let randomButton = document.getElementById('random-insert')
        if (randomButton !== null) randomButton.remove()
    }
  }
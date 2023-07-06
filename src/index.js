function ship() {
    return {
        length: null,
        hits: 0,
        hit: function () {
            ++this.hits
        },
        isSunk: function () {
            if(this.hits === this.length) return true
        }
    }
}

function gameboard() {
    return {
        grid: buildGrid(),
        ship1: null,
        ship2: null,
        ship3: null,
        ship4: null,
        ship5: null,
        receiveAttack: function () {

        },
        allShipsSunk: function () {

        }
    }
}

function buildGrid() {

}
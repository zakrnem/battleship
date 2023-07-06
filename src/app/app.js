export function ship(length) {
    return {
        length: length,
        hits: 0,
        hit: function () {
            if (this.hits < this.length) ++this.hits
            return this.isSunk()
        },
        isSunk: function () {
            return (this.hits === this.length) ? true : false
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
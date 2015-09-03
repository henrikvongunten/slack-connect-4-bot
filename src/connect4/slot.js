const ColourEnum = require('./colourEnum');
const Emoji = require('./emoji');

class Slot {

    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.empty = true;
        this.symbol = Emoji.circle.white;
    }

    play(colour) {
        this.empty = false;
        this.symbol = colour === ColourEnum.RED ? Emoji.circle.red : Emoji.circle.blue;
    }

    toString() {
        return this.symbol + ' ';
    }
}

module.exports = Slot;
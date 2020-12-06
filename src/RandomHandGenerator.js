import Suit from './entities/Suit.js'
import RandomSymbolGenerator from './randomizers/RandomSymbolGenerator.js'

export default class RandomHandGenerator {
    constructor(randomFn, randomCard) {
        this._randomFn = randomFn;

        if (randomCard === undefined) {
            this._randomSymbolGenerator = new RandomSymbolGenerator(this._randomFn);
        } else {
            this._randomSymbolGenerator = randomCard;
        }
    }

    getRoyalFlush() {
        let suit = this._randomSymbolGenerator.getRandomSuit();

        return `T${suit} J${suit} Q${suit} K${suit} A${suit}`;
    }

    getStraightFlush() {
        let suit = this._randomSymbolGenerator.getRandomSuit(),
            lowerRank = this._randomSymbolGenerator.getRandomRank(undefined, 7),
            hand = lowerRank.toString() + suit + ' ',
            i = 0;

        for (i; i < 4; i++) {
            lowerRank = lowerRank.followingRank();
            hand += lowerRank.toString() + suit + ' ';
        }

        return hand.trim();
    }

    getFourOfAKind() {
        let suit = this._randomSymbolGenerator.getRandomSuit(),
            rank = this._randomSymbolGenerator.getRandomRank(),
            extraRank = this._randomSymbolGenerator.getRandomRank([rank]),
            hand = `${rank}${Suit.validSuits[0]} ${rank}${Suit.validSuits[1]} ${rank}${Suit.validSuits[2]} ${rank}${Suit.validSuits[3]} ${extraRank}${suit}`;

        return hand;
    }

    getFlush() {
        let rank = this._randomSymbolGenerator.getRandomRank(),
            suit = this._randomSymbolGenerator.getRandomSuit(),
            exceptions = [rank, rank.followingRank()],
            i = 0,
            hand = `${rank}${suit} `;

        for (i; i < 4; i++) {
            rank = this._randomSymbolGenerator.getRandomRank(exceptions);
            exceptions.push(rank);

            hand += `${rank}${suit} `;
        }

        return hand.trim();
    }

    getStraight() {
        let suit,
            rank = this._randomSymbolGenerator.getRandomRank(),
            i = 0,
            hand = '';

        for (i; i < 5; i++) {
            rank = rank.followingRank();
            suit = this._randomSymbolGenerator.getRandomSuit();
            hand += `${rank}${suit} `;
        }

        hand = hand.trim();

        if (hand.charAt(1) == suit && hand.charAt(4) == suit) {
            hand = hand.slice(0, -1) + this._randomSymbolGenerator.getRandomSuit([suit]);
        }

        return hand;
    }

    getFullHouse() {
        let suit = this._randomSymbolGenerator.getRandomSuit(),
            rank = this._randomSymbolGenerator.getRandomRank(),
            hand = this._getTrio(rank, suit),
            kickerRank = this._randomSymbolGenerator.getRandomRank([rank]),
            suitExceptions = [],
            i = 0;

        for (i; i < 2; i++) {
            suit = this._randomSymbolGenerator.getRandomSuit(),
                hand += ` ${kickerRank}${suit}`;
            suitExceptions.push(suit);
        }

        return hand;
    }

    getThreeOfAKind() {
        let suit = this._randomSymbolGenerator.getRandomSuit(),
            rank = this._randomSymbolGenerator.getRandomRank(),
            hand = this._getTrio(rank, suit),
            i = 0,
            exceptions = [rank];

        for (i; i < 2; i++) {
            suit = this._randomSymbolGenerator.getRandomSuit();
            rank = this._randomSymbolGenerator.getRandomRank(exceptions);
            hand += ` ${rank}${suit}`;
            exceptions.push(rank);
        }

        return hand;
    }

    getTwoPairs() {
        let suit,
            rank = this._randomSymbolGenerator.getRandomRank(),
            hand = this._getPair(rank),
            i = 0,
            exceptions = [rank];

        rank = this._randomSymbolGenerator.getRandomRank(exceptions);
        hand += ' ' + this._getPair(rank);
        exceptions.push(rank);

        suit = this._randomSymbolGenerator.getRandomSuit();
        rank = this._randomSymbolGenerator.getRandomRank(exceptions);
        hand += ` ${rank}${suit}`;

        return hand;
    }

    getPair() {
        let suit,
            rank = this._randomSymbolGenerator.getRandomRank(),
            hand = this._getPair(rank),
            i = 0,
            exceptions = [rank];

        for (i; i < 3; i++) {
            suit = this._randomSymbolGenerator.getRandomSuit();
            rank = this._randomSymbolGenerator.getRandomRank(exceptions);
            hand += ` ${rank}${suit}`;
            exceptions.push(rank);
        }

        return hand;
    }

    getHighCard() {
        let suit = this._randomSymbolGenerator.getRandomSuit(),
            rank = this._randomSymbolGenerator.getRandomRank(),
            hand = `${rank}${suit}`,
            i = 0,
            exceptions = [rank, rank.previousRank(), rank.followingRank()];

        for (i; i < 4; i++) {
            suit = this._randomSymbolGenerator.getRandomSuit();
            rank = this._randomSymbolGenerator.getRandomRank(exceptions);
            hand += ` ${rank}${suit}`;
            exceptions.push(rank);
        }

        if (hand.charAt(1) == suit && hand.charAt(4) == suit) {
            hand = hand.slice(0, -1) + this._randomSymbolGenerator.getRandomSuit([suit]);
        }

        return hand;
    }

    _getTrio(rank, suit) {
        let suits = Suit.validSuits.filter(validSuit => validSuit !== suit);

        return `${rank}${suits[0]} ${rank}${suits[1]} ${rank}${suits[2]}`;
    }

    _getPair(rank) {
        let firstSuit = this._randomSymbolGenerator.getRandomSuit(),
            secondSuit = this._randomSymbolGenerator.getRandomSuit([firstSuit]);

        return `${rank}${firstSuit} ${rank}${secondSuit}`;
    }
}
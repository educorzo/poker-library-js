import Rank from '../entities/Rank.js';
import Suit from '../entities/Suit.js';

export default class RandomSymbolGenerator {
    constructor(randomFn) {
        this._randomFn = randomFn
    }

    getRandomRank(exceptions, max) {
        var index, rank,
            validRanks = Rank.validRanks,
            numberOfExceptions = 0;

        if (rank === undefined) {
            max = Rank.validRanks.length - 1;
        }

        if (exceptions !== undefined) {
            exceptions.forEach(rankException => {
                validRanks = validRanks.filter(rank => rank !== rankException.toString());
            });
            numberOfExceptions = exceptions.length;
        }

        if (validRanks.length === 0) {
            throw new Error('All ranks are included in exceptions');
        }

        index = Math.floor(this._randomFn() * (max - numberOfExceptions));
        rank = new Rank(validRanks[index]);

        return rank;
    }

    getRandomSuit(exceptions) {
        var index,
            validSuits = Suit.validSuits;

        if (exceptions !== undefined) {
            exceptions.forEach(suitException => {
                validSuits = validSuits.filter(suit => suit !== suitException.toString());
            });
        }

        if (validSuits.length === 0) {
            throw new Error('All suits are included in exceptions');
        }

        index = Math.floor(this._randomFn() * (validSuits.length - 1));
        return new Suit(validSuits[index]);
    }
}
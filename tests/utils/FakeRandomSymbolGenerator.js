import Rank from '../../src/entities/Rank.js';
import Suit from '../../src/entities/Suit.js';

export function getFakeRandomSymbolGenerator(suits, ranks) {
    return {
        getRandomSuit: function (exceptions) {
            let suit;

            if (exceptions !== undefined && exceptions.includes(new Suit(suits[0]))) {
                suits.shift();
            }
            suit = new Suit(suits[0]);
            suits.shift();

            return suit;
        },
        getRandomRank: function (exceptions) {
            let rank;

            if (exceptions !== undefined) {
                exceptions.forEach(exception => {
                    ranks = ranks.filter(rank => rank !== exception.toString());
                });
            }

            rank = new Rank(ranks[0]);
            ranks.shift();

            return rank;
        }
    };
};
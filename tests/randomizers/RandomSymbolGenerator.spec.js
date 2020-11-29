import Rank from '../../src/entities/Rank.js';
import Suit from '../../src/entities/Suit.js';
import RandomSymbolGenerator from '../../src/randomizers/RandomSymbolGenerator.js';

describe('RandomSymbolGenerator', function () {
    let random = function () { return 1; }, // 1 is the max rank possible
        randomSymbolGenerator = new RandomSymbolGenerator(random);

    describe('when getting random rank', function () {
        describe('and max is not defined', function () {
            it('should set max as 13 (the max of ranks)', function () {
                expect(randomSymbolGenerator.getRandomRank().toString()).toEqual('A');
            });
        });

        describe('and all ranks are in exceptions', function () {
            it('should throw an exception', function () {
                let exceptions = [];

                Rank.validRanks.forEach(function (validRank) {
                    exceptions.push(new Rank(validRank));
                });

                expect(function () { randomSymbolGenerator.getRandomRank(exceptions) }).toThrow(new Error('All ranks are included in exceptions'));
            });
        });
    });

    describe('when getting random suit', function () {
        describe('when all suits are in exceptions', function () {
            it('should throw an exception', function () {
                let exceptions = [];

                Suit.validSuits.forEach(function (validSuit) {
                    exceptions.push(new Suit(validSuit));
                });

                expect(function () { randomSymbolGenerator.getRandomSuit(exceptions) }).toThrow(new Error('All suits are included in exceptions'));
            });
        });
    });
});
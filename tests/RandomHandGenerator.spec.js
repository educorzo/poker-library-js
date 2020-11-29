import RandomHandGenerator from '../src/RandomHandGenerator.js';
import * as FakeRandomSymbolGenerator from './utils/FakeRandomSymbolGenerator.js';


describe('RandomHandGenerator', function () {
    let random = function () { return 0; },
        getFakeRandomSymbolGenerator = FakeRandomSymbolGenerator.getFakeRandomSymbolGenerator;

    describe('Get Royal flush', function () {
        it('should return a Royal flush', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h'], []),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getRoyalFlush()).toEqual('Th Jh Qh Kh Ah');
        });
    });

    describe('Get straight flush', function () {
        it('should return a straight flush', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h'], ['2']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getStraightFlush()).toEqual('2h 3h 4h 5h 6h');
        });
    });

    describe('Get four of a kind', function () {
        it('should return a four of a kind', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h'], ['2', 'A']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getFourOfAKind()).toEqual('2d 2s 2c 2h Ah');
        });
    });

    describe('Get flush', function () {
        it('should return a flush', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h'], ['2', 'A', '6', 'K', '4']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getFlush()).toEqual('2h Ah 6h Kh 4h');
        });

        it('should not return a straight flush', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h'], ['2', '3', '4', '5', '6', '7']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getFlush()).not.toEqual('2h 3h 4h 5h 6h');
        });
    });

    describe('Get straight', function () {
        it('should return a straight', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h', 'h', 'd', 'h', 'd'], ['2']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getStraight()).toEqual('3h 4h 5d 6h 7d');
        });

        it('should not return a straight flush', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h', 'h', 'h', 'h', 'h', 'd'], ['2']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getStraight()).not.toEqual('3h 4h 5h 6h 7h');
        });
    });

    describe('Get full house', function () {
        it('should return a full house', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['d', 'd', 'h'], ['2', 'A']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getFullHouse()).toEqual('2d 2s 2c Ad Ah');
        });
    });

    describe('Get three of a kind', function () {
        it('should return a three of a kind', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['d', 'h', 'c'], ['2', '3', '4']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getThreeOfAKind()).toEqual('2d 2s 2c 3h 4c');
        });

        it('should not return a full house', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['d', 'h', 'c'], ['2', '3', '3', '4']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getThreeOfAKind()).not.toEqual('2d 2s 2c 3h 3c');
        });
    });

    describe('Get two pairs', function () {
        it('should return a two pairs', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h', 'd', 'c', 'h', 'd'], ['2', 'A', '4']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getTwoPairs()).toEqual('2h 2d Ac Ah 4d');
        });
    });

    describe('Get pair', function () {
        it('should return a pair', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h', 'd', 'c', 'h', 'd'], ['2', '3', '4', '5']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getPair()).toEqual('2h 2d 3c 4h 5d');
        });

        it('should not return a full house', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h', 'd', 'c', 'h', 'd'], ['2', '3', '3', '3', '4', '5']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getPair()).not.toEqual('2h 2d 3c 3h 3d');
        });
    });

    describe('Get high card', function () {
        it('should return a high card', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h', 'd', 'h', 'c', 'd'], ['2', '4', '5', '6', 'K']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getHighCard()).toEqual('2h 4d 5h 6c Kd');
        });

        it('should not return a flush', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h', 'h', 'h', 'h', 'h', 'd', 'c', 'd'], ['2', '4', '5', '6', 'K']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getHighCard()).not.toEqual('2h 4h 5h 6h Kh');
        });

        it('should not return a straight', function () {
            let randomSymbolGenerator = getFakeRandomSymbolGenerator(['h', 'h', 'd', 'c', 'd'], ['2', '3', '4', '5', '6', 'K']),
                randomHandGenerator = new RandomHandGenerator(random, randomSymbolGenerator);

            expect(randomHandGenerator.getHighCard()).not.toEqual('2h 3h 4d 5c 6d');
        });
    });
});
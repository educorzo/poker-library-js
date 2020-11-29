import Rank from './../../src/entities/Rank.js';

describe('Getting the following rank', function () {
    describe('and the rank is 2', function () {
        it('should return 3', function () {
            let rank = new Rank('2');

            expect(rank.followingRank().toString()).toEqual('3');
        });
    });

    describe('and the rank is A', function () {
        it('should return 2', function () {
            let rank = new Rank('A');

            expect(rank.followingRank().toString()).toEqual('2');
        });
    });
});

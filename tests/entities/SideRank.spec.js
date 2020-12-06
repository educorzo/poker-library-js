import Rank from '../../src/entities/Rank.js';

describe('Side rank', function (){
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
    
    describe('Getting the previous rank', function () {
        describe('and the rank is 3', function () {
            it('should return 2', function () {
                let rank = new Rank('3');
    
                expect(rank.previousRank().toString()).toEqual('2');
            });
        });
    
        describe('and the rank is A', function () {
            it('should return K', function () {
                let rank = new Rank('A');
    
                expect(rank.previousRank().toString()).toEqual('K');
            });
        });
    });    
});
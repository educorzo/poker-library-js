import Rank from './../../src/entities/Rank.js';

describe('Checking that a rank is directly below to other rank', function () {
  describe('when rank is directly below to second rank', function () {
    it('should return true', function () {
      let rank = new Rank('A'),
        secondRank = new Rank('K');

      expect(rank.isDirectlyBelow(secondRank)).toBeTruthy();
    });
  });

  describe('when rank is not directly below to second rank', function () {
    it('should return false', function () {
      let rank = new Rank('A'),
        secondRank = new Rank('Q');

      expect(rank.isDirectlyBelow(secondRank)).toBeFalsy();
    });
  });

  describe('when second rank is not defined', function () {
    it('should return false', function () {
      let rank = new Rank('K');

      expect(rank.isDirectlyBelow()).toBeFalsy();
    });
  });

  describe('when rank is a 2 and second rank is an As', function () {
    it('should return true', function () {
      let rank = new Rank('2'),
        secondRank = new Rank('A');

      expect(rank.isDirectlyBelow(secondRank)).toBeTruthy();
    });
  });
});

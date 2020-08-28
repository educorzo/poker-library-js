import Rank from './../../src/entities/Rank.js';

describe('Comparing two ranks', function () {
  describe('when second rank is not defined', function () {
    it('should return a number greater than 0', function () {
      let greaterRank = new Rank('K');

      expect(greaterRank.compareTo()).toBeGreaterThan(0);
    });
  });

  describe('when rank is greater than second rank', function () {
    it('should return a number greater than 0', function () {
      let greaterRank = new Rank('K'),
        lowerRank = new Rank('2');

      expect(greaterRank.compareTo(lowerRank)).toBeGreaterThan(0);
    });
  });

  describe('when rank is equal than second rank', function () {
    it('should return 0', function () {
      let rank1 = new Rank('J'),
        rank2 = new Rank('J');

      expect(rank1.compareTo(rank2)).toEqual(0);
    });
  });

  describe('when rank is less than second rank', function () {
    it('should return a number lower than 0', function () {
      let lowerRank = new Rank('T'),
        greaterRank = new Rank('Q');

      expect(lowerRank.compareTo(greaterRank)).toEqual(-1);
    });
  });
});

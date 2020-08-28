import Rank from './../../src/entities/Rank.js';

describe('Rank', function (){
  it('should throw exception with invalid rank', function () {
     expect(function(){ new Rank('#')}).toThrow(new Error('# is not a valid rank'));
  });

  describe('when checking a rank', function () {
    describe('and the rank exists on poker', function () {
      it('should return true', function () {
        expect(Rank.isValid('Q')).toBeTruthy();
      });
    });

    describe('and the rank has more than one character', function () {
      it('should return false', function () {
        expect(Rank.isValid('AA')).toBeFalsy();
      });
    });

    describe('and the rank is undefined', function () {
      it('should return false', function () {
        expect(Rank.isValid()).toBeFalsy();
      });
    });

    describe('and the rank is not a character', function () {
      it('should return false', function () {
        expect(Rank.isValid(1)).toBeFalsy();
      });
    });
  });

  it('should be represented as string', function () {
      let rank = new Rank('3');

      expect(rank.toString()).toEqual('3');
  });
});

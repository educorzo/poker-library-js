import Suit from './../../src/entities/Suit.js';

describe('Suit', function (){
  it('should throw exception with invalid rank', function () {
     expect(function(){ new Suit('#')}).toThrow(new Error('# is not a valid suit'));
  });

  describe('when checking a suit', function () {
    describe('and the suit exists on poker', function () {
      it('should return true', function () {
        expect(Suit.isValid('h')).toBeTruthy();
      });
    });

    describe('and the suit has more than one character', function () {
      it('should return false', function () {
        expect(Suit.isValid('ss')).toBeFalsy();
      });
    });

    describe('and the suit is undefined', function () {
      it('should return false', function () {
        expect(Suit.isValid()).toBeFalsy();
      });
    });
  
    describe('and the suit is not a character', function () {
      it('should return false', function () {
          expect(Suit.isValid(1)).toBeFalsy();
      });
    });
  });

  it('should be represented as string', function () {
      let rank = new Suit('s');

      expect(rank.toString()).toEqual('s');
  });
});

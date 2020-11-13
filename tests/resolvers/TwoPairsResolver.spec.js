import TwoPairsResolver from './../../src/resolvers/TwoPairsResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('TwoPairsResolver', function () {
  const testCases = [
    { hand: '2d 2h Ad 5h As',  expectedHand: 'Ad As 2d 2h 5h' },
    { hand: '2d 2h Ad 5h As 7h',  expectedHand: 'Ad As 2d 2h 7h' },
    { hand: '2d 3h Ad 5h Ts 7h',  expectedHand: ' ' }
  ];

  testCases.forEach((test) => {
    describe(`with hand ${test.hand}`, () => {
      it('should return two pair and the kicker in order of importance', () =>  {
        let hand = HandParser.parseHand(test.hand);

        expect(Printer.toString(TwoPairsResolver.tryResolveTwoPairs(hand))).toEqual(test.expectedHand);
      });
    });
  });

  describe('when there are more than two pairs', function () {
      it('should throw exception', () => {
        let hand = HandParser.parseHand('2h 2s As Ad 3d 3s');

        expect(function(){TwoPairsResolver.tryResolveTwoPairs(hand)}).toThrow(new Error('More than two pairs in TwoPairsResolver is not allowed'));
      });
  });
});

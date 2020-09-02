import Hand from './../../src/entities/Hand.js';
import PairResolver from './../../src/resolvers/PairResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('PairResolver', function () {
  const testCases = [
    { hand: '2d 2h Ad 5h 7s',  expectedHand: '2h 2d Ad 7s 5h' },
    { hand: '2d 2h Ad 5h 7s 6s',  expectedHand: '2h 2d Ad 7s 6s' },
    { hand: '2d 8h Ad 5h 7s', expectedHand: ' ' },
  ];

  testCases.forEach((test, index) => {
    describe(`with hand ${test.hand}`, () => {
      it('should return pair and kickers in order of importance', () =>  {
        let hand = HandParser.parseHand(test.hand);

        expect(Printer.toString(PairResolver.tryResolvePair(hand))).toEqual(test.expectedHand);
      });
    });
  });

  describe('when there are more than one pair', function () {
      it('should throw exception', () => {
        let hand = HandParser.parseHand('2h 2s As Ad 3d');

        expect(function(){PairResolver.tryResolvePair(hand)}).toThrow(new Error('Two pairs in PairResolver is not allowed'));
      });
  });
});

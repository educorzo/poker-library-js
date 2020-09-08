import Hand from './../../src/entities/Hand.js';
import FourOfAKindResolver from './../../src/resolvers/FourOfAKindResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('FourOfAKindResolver', function () {
  const testCases = [
    { hand: 'Ac As Ad Ah 9s Ts',  expectedHand: 'Ah Ad As Ac Ts' },
    { hand: '2d 2s 2d 2h Ac As Ad Ah 9s Ts',  expectedHand: 'Ah Ad As Ac Ts' },
    { hand: '2d 3h Ad 5h Ts 7h',  expectedHand: ' ' }
  ];

  testCases.forEach((test, index) => {
    describe(`with hand ${test.hand}`, () => {
      it('should return a four of a kind and the best kicker', () =>  {
        let hand = HandParser.parseHand(test.hand);

        expect(Printer.toString(FourOfAKindResolver.tryResolveFourOfAKind(hand))).toEqual(test.expectedHand);
      });
    });
  });
});

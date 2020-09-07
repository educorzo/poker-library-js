import Hand from './../../src/entities/Hand.js';
import TrioResolver from './../../src/resolvers/TrioResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('TrioResolver', function () {
  const testCases = [
    { hand: '2d 2h 5h 7s 2s',  expectedHand: '2s 2h 2d 7s 5h' },
    { hand: '2d 2h 4s 5h 7s',  expectedHand: ' ' },
    { hand: '2d 2h 2s 5h 7s Ad As Ah',  expectedHand: 'Ah As Ad 7s 5h'}
  ];

  testCases.forEach((test, index) => {
    describe(`with hand ${test.hand}`, () => {
      it('should return trio and kickers in order of importance', () =>  {
        let hand = HandParser.parseHand(test.hand);

        expect(Printer.toString(TrioResolver.tryResolveTrio(hand))).toEqual(test.expectedHand);
      });
    });
  });
});

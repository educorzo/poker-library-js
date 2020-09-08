import Hand from './../../src/entities/Hand.js';
import StraightResolver from './../../src/resolvers/StraightResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('StraightResolver', function () {
  const testCases = [
    { hand: '8c 4s 6s 7d 5c',  expectedHand: '8c 7d 6s 5c 4s' },
    { hand: '8c 4s 6s 7d 5c 9d',  expectedHand: '9d 8c 7d 6s 5c' },
    { hand: 'Ts 8c 4s 6s 7d 5c',  expectedHand: '8c 7d 6s 5c 4s' },
    { hand: '2d 3h Ad 5h Ts 7h',  expectedHand: ' ' },
    { hand: '8c 4s 6s 7d 5c 2d',  expectedHand: '8c 7d 6s 5c 4s' },
  ];

  testCases.forEach((test, index) => {
    describe(`with hand ${test.hand}`, () => {
      it('should return a straight of five cards in order of importance', () =>  {
        let hand = HandParser.parseHand(test.hand);

        expect(Printer.toString(StraightResolver.tryResolveStraight(hand))).toEqual(test.expectedHand);
      });
    });
  });
});

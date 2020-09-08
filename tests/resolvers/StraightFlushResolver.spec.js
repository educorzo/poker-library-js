import Hand from './../../src/entities/Hand.js';
import StraightFlushResolver from './../../src/resolvers/StraightFlushResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('StraightFlushResolver', function () {
  const testCases = [
    { hand: '8s 7s 6s 2d 5s 4s',  expectedHand: '8s 7s 6s 5s 4s' },
    { hand: '8s 7s 6s 2d 5d 4s',  expectedHand: ' ' },
    { hand: '9d 8h 7h 6d 5h 8s 7s 6s 2d 5s 4s',  expectedHand: '8s 7s 6s 5s 4s' }, //Higher straight is not a flush
    { hand: '8s 7h 6c 2d 5s 4s 9d 8d 7d 6d 5d',  expectedHand: '9d 8d 7d 6d 5d' }
  ];

  testCases.forEach((test, index) => {
    describe(`with hand ${test.hand}`, () => {
      it('should return a straight flush of five cards in order of importance', () =>  {
        let hand = HandParser.parseHand(test.hand);

        expect(Printer.toString(StraightFlushResolver.tryResolveStraightFlush(hand))).toEqual(test.expectedHand);
      });
    });
  });
});

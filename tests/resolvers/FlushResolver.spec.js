import Hand from './../../src/entities/Hand.js';
import FlushResolver from './../../src/resolvers/FlushResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('FlushResolver', function () {
  const testCases = [
    { hand: '8c 4s 6s 7d 5s 9s Ts',  expectedHand: 'Ts 9s 6s 5s 4s' },
    { hand: '8c 4s 6s 7d 5s 9s Ts 2c Kc 3c 5c',  expectedHand: 'Kc 8c 5c 3c 2c' },
    { hand: '2d 3h Ad 5h Ts 7h',  expectedHand: ' ' }
  ];

  testCases.forEach((test, index) => {
    describe(`with hand ${test.hand}`, () => {
      it('should return a flush of five cards in order of importance', () =>  {
        let hand = HandParser.parseHand(test.hand);

        expect(Printer.toString(FlushResolver.tryResolveFlush(hand))).toEqual(test.expectedHand);
      });
    });
  });
});

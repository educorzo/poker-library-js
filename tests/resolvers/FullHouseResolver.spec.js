import FullHouseResolver from './../../src/resolvers/FullHouseResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('FullHouseResolver', function () {
  const testCases = [
    { hand: '2d 2h 5h 7s 2s 5d',  expectedHand: '2s 2h 2d 5d 5h' },
    { hand: '2d 3h 5h 7s 2s 5d',  expectedHand: ' ' },
    { hand: '2d 2h 5h 7s 2s 5d Kd Ks',  expectedHand: '2s 2h 2d Ks Kd' },
  ];

  testCases.forEach((test) => {
    describe(`with hand ${test.hand}`, () => {
      it('should return trio and kickers in order of importance', () =>  {
        let hand = HandParser.parseHand(test.hand);

        expect(Printer.toString(FullHouseResolver.tryResolveFullHouse(hand))).toEqual(test.expectedHand);
      });
    });
  });
});

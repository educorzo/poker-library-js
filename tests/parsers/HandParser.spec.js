import * as HandParser from './../../src/parsers/HandParser.js';

describe('HandParser', function () {
  it('should parse the whole hand', function () {
    let hand = HandParser.parseHand('2d Ad 3d Js Qh');

    expect(hand.numberOfCards()).toEqual(5);
    expect(hand.toString()).toEqual('Ad Qh Js 3d 2d');
  });

  describe('when there are less than five cards', function () {
      it('should throw exception', () => {
        expect(function(){HandParser.parseHand('2d Ad 3d Js')})
          .toThrow(new Error('A hand with less than 5 cards is not allowed'));
      });
  });
});

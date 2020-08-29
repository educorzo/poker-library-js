import * as HandParser from './../../src/parsers/HandParser.js';

describe('HandParser', function () {
  it('should parse the whole hand', function () {
    let hand = HandParser.parseHand('2d Ad 3d Js Qh');

    expect(hand._cards.size).toEqual(5);
    expect(hand.toString()).toEqual('2d Ad 3d Js Qh');
  });
});

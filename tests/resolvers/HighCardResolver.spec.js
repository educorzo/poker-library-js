import Hand from './../../src/entities/Hand.js';
import HighCardResolver from './../../src/resolvers/HighCardResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';

describe('HighCardResolver', function () {
  it('should return a hand with cards in order of importance', function () {
    let hand = HandParser.parseHand('2d Ad 3d Js Qh');

    expect(HighCardResolver.resolveHighCard(hand).toString()).toEqual('Ad Qh Js 3d 2d');
  });

  it('should return the five most important cards', function () {
    let hand = HandParser.parseHand('2d 3d Ad Js Qh 9d 5h');

    expect(HighCardResolver.resolveHighCard(hand).toString()).toEqual('Ad Qh Js 9d 5h');
  });
});

import Hand from './../../src/entities/Hand.js';
import HighCardResolver from './../../src/resolvers/HighCardResolver.js';
import * as HandParser from './../../src/parsers/HandParser.js';
import * as Printer from './../utils/ArrayOfCardsToString.js';

describe('HighCardResolver', function () {
  it('should return the five most important cards', function () {
    let hand = HandParser.parseHand('2d 3d Ad Js Qh 9d 5h');

    expect(Printer.toString(HighCardResolver.resolveHighCard(hand))).toEqual('Ad Qh Js 9d 5h');
  });
});

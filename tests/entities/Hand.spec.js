import Hand from './../../src/entities/Hand.js';
import Card from './../../src/entities/Card.js';
import Rank from './../../src/entities/Rank.js';

describe('Hand', function () {
  it('should not allow undefined set of cards', function () {
      expect(function(){ new Hand()}).toThrow(new Error('Undefined hand is not allowed'));
  });

  it('should be represented as string', function () {
    let card = new Card(new Rank('A'), 's'),
      card2 = new Card(new Rank('Q'), 'd'),
      hand = new Hand(new Set([card, card2]));

    expect(hand.toString()).toEqual('As Qd');
  });

  it('should keep cards in order', function () {
    let card = new Card(new Rank('Q'), 's'),
      card2 = new Card(new Rank('2'), 'd'),
      card3 = new Card(new Rank('A'), 'd'),
      hand = new Hand(new Set([card, card2, card3]));

      expect(hand.toString()).toEqual('Ad Qs 2d');
  });
});

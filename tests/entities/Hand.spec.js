import Hand from './../../src/entities/Hand.js';
import Card from './../../src/entities/Card.js';
import Rank from './../../src/entities/Rank.js';

describe('Hand', function () {
  it('should be represented as string', function () {
    let card = new Card(new Rank('A'), 's'),
      card2 = new Card(new Rank('Q'), 'd'),
      hand = new Hand(new Set([card, card2]));

    expect(hand.toString()).toEqual('As Qd');
  });
});

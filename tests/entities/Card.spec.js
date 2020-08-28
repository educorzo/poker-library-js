import Card from './../../src/entities/Card.js';
import Rank from './../../src/entities/Rank.js';

describe('Card', function () {
  it('should be represented as string', function () {
    let card = new Card(new Rank('A'),'s');

    expect(card.toString(card)).toEqual('As');
  });
});

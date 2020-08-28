import Card from './../../src/entities/Card.js';

describe('Card', function () {
  it('should be represented as string', function () {
    let card = new Card('A','s');

    expect(card.toString(card)).toEqual('As');
  });
});

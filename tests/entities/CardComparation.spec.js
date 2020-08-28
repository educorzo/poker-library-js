import Card from './../../src/entities/Card.js';
import Rank from './../../src/entities/Rank.js';

describe('Comparing two cards', function () {
  describe('when card is compare to undefined', function () {
    it('should return a number greater than 0', function () {
      let card = new Card(new Rank('A'),'s');

      expect(card.compareTo()).toBeGreaterThan(0);
    });
  });
});

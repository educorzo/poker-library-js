import Card from './Card.js';
import Rank from './Rank.js';

export default class Hand {
  constructor(cards) {
    this._cards = cards;
  }

  compareTo(that) {
    let thisFirstCard = this._cards.values().next().value,
      thatFirstCard = that._cards.values().next().value;

    return thisFirstCard.compareTo(thatFirstCard);
  }
}

import Card from './Card.js';

export default class Hand {
  constructor(cards) {
    this._cards = cards;
  }
  
  compareTo(that) {
    return this._cards.values().next().value.compareTo(that._cards.values().next().value);
  }
}

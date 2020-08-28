import Rank from './Rank.js';

export default class Card {
  constructor(rank, suit) {
    this._rank = new Rank(rank);
    this._suit = suit;
  }

  compareTo(that) {
    return this._rank.compareTo(that._rank);
  }

  toString() {
    return this._rank.toString() + this._suit;
  }
}

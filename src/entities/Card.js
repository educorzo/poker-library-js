import Rank from './Rank.js';

export default class Card {
  constructor(rank, suit) {
    this._rank = rank;
    this._suit = suit;
  }

  compareTo(that) {
    if(that !== undefined) {
      return this._rank.compareTo(that._rank);
    }

    return 1;
  }

  toString() {
    return this._rank.toString() + this._suit;
  }
}

export default class Card {
  constructor(rank, suit) {
    this._rank = rank;
    this._suit = suit;
  }

  compareTo(that) {
    if(this._rank == 'A') {
      return 1;
    }

    return 0;
  }
}

export default class Rank {

  constructor(rank) {
    if(!Rank.isValid(rank)) {
      throw new Error(`${rank} is not a valid rank`);
    }

    this._rank = rank;
  }

  compareTo(that) {
    let thisValue = Rank.validRanks.findIndex(this.areEqual, this),
      thatValue = Rank.validRanks.findIndex(that.areEqual, that);

    if(thisValue > thatValue) {
      return 1;
    }

    if(thisValue < thatValue) {
      return -1;
    }

    return 0;
  }

  areEqual(value) {
    return this._rank === value;
  }

  static isValid(rank) {
    return rank !== undefined && rank.length == 1 && Rank.validRanks.includes(rank);
  }
}

Rank.validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

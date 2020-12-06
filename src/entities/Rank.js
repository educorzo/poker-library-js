export default class Rank {
  constructor(rank) {
    if (!Rank.isValid(rank)) {
      throw new Error(`${rank} is not a valid rank`);
    }

    this._rank = rank;
  }

  getRank() {
    return this._rank;
  }

  isDirectlyBelow(that) {
    let thisValue = Rank.validRanks.findIndex(this.hasEqualValue, this),
      thatValue;

    if (that !== undefined) {
      thatValue = Rank.validRanks.findIndex(that.hasEqualValue, that);
    } else {
      return false;
    }

    if (thisValue === 0 && thatValue === Rank.validRanks.length - 1) {
      return true;
    }

    return thisValue - thatValue === 1;
  }

  compareTo(that) {
    let thisValue = Rank.validRanks.findIndex(this.hasEqualValue, this),
      thatValue;

    if (that !== undefined) {
      thatValue = Rank.validRanks.findIndex(that.hasEqualValue, that);
    } else {
      thatValue = -1;
    }

    if (thisValue > thatValue) {
      return 1;
    }

    if (thisValue < thatValue) {
      return -1;
    }

    return 0;
  }

  areEqual(other) {
    return this._rank === other._rank;
  }

  toString() {
    return this._rank.toString();
  }

  followingRank() {
    let index = Rank.validRanks.findIndex(this.hasEqualValue, this);

    if (index === Rank.validRanks.length - 1) {
      index = -1;
    }

    return new Rank(Rank.validRanks[index + 1]);
  }

  previousRank() {
    let index = Rank.validRanks.findIndex(this.hasEqualValue, this);

    if (index === 0) {
      index = Rank.validRanks.length - 1;
    }

    return new Rank(Rank.validRanks[index - 1]);
  }

  static isValid(rank) {
    return rank !== undefined && rank.length == 1 && Rank.validRanks.includes(rank);
  }

  /*private*/
  hasEqualValue(value) {
    return this._rank === value;
  }
}

Rank.validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

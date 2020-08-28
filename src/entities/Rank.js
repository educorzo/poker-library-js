export default class Rank {

  constructor(rank) {
    if(!Rank.isValid(rank)) {
      throw new Error(`${rank} is not a valid rank`);
    }

    this._rank = rank;
  }

  compareTo(that) {
    if(this._rank === 'A') {
      return 1;
    }

    return 0;
  }

  static isValid(rank) {
  //  let validRanks = new Set(['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']);

    return rank !== undefined && rank.length == 1 && Rank.validRanks.has(rank);
  }
}

Rank.validRanks = new Set(['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']);

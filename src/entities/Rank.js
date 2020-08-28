export default class Rank {
  constructor(rank) {
    this._rank = rank;
  }

  compareTo(that) {
    if(this._rank == 'A') {
      return 1;
    }

    return 0;
  }
}

import Card from './Card.js';
import Rank from './Rank.js';

export default class Hand {
  constructor(cards) {
    if(cards !== undefined) {
      this._cards = cards;
    } else {
      throw new Error('Undefined hand is not allowed');
    }
  }

  compareTo(that) {
    let thisFirstCard = this._cards.values().next().next().value,
      thatFirstCard = that._cards.values().next().next().value;

    return thisFirstCard.compareTo(thatFirstCard);
  }

  toString(){
    let result = '';

    for (var card of this._cards) {
        result += card.toString() + ' ';
    }

    return result.substring(0, result.length - 1);;
  }
}

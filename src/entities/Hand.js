import Card from './Card.js';
import Rank from './Rank.js';
import HighCardResolver from './../resolvers/HighCardResolver.js';

export default class Hand {
  constructor(cards) {
    if(cards !== undefined) {
      this._cards = cards;
    } else {
      throw new Error('Undefined hand is not allowed');
    }
  }

  getCards() {
    return this._cards;
  }

  compareTo(that) {
    let thisHand = HighCardResolver.resolveHighCard(this),
      thatHand = HighCardResolver.resolveHighCard(that),
      thisFirstCard = thisHand._cards.values().next().value,
      thatFirstCard = thatHand._cards.values().next().value;

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

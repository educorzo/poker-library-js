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

  getCards() {
    return this._cards;
  }
/*
  compareTo(that) {
    /*let thisHand = HighCardResolver.resolveHighCard(this),
      thatHand = HighCardResolver.resolveHighCard(that),
      index = 0,
      result = 0;

      for(index; index < 5; index++) {
        result = thisHand._cards[index].compareTo(thatHand._cards[index]);
        if(result !== 0) {
          return result;
        }
      }

    return result;
  }
*/
  toString(){
    let result = '';

    for (var card of this._cards) {
        result += card.toString() + ' ';
    }

    return result.substring(0, result.length - 1);;
  }
}

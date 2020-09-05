import Hand from './../entities/Hand.js';

export default class StraightResolver {

  static tryResolveStraight(hand) {
    let cards = hand.getCards(),
      straight = [cards[0]],
      i = 1;

    for(i; i< cards.length; i++) {
      if(!cards[i - 1].isDirectlyBelow(cards[i])) {
        straight = [];
      }
      straight.push(cards[i]);
    }

    if(straight.length >= 5) {
      return straight.slice(0, 5);
    }
    
    return [];
  }
}

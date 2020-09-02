import Hand from './../entities/Hand.js';

export default class TwoPairsResolver {

  static tryResolveTwoPairs(hand) {
    let cards = hand.getCards(),
      pair = [],
      kickers = [],
      j,
      counter = 0;

    cards.forEach((card, i) => {
      for(j = 0 + counter; j < cards.length; j++) {
        if(card.areEqual(cards[j]) && i !== j) {
          pair.push(card);
          pair.push(cards[j]);
        }
      }
      if(!pair.includes(card))
      {
        kickers.push(card);
      }

      counter++;
    });

    if(pair.length !== 0) {
      if(pair.length < 4 ) {
        return [];
      } else if (pair.length > 4) {
        throw new Error('More than two pairs in TwoPairsResolver is not allowed');
      }

      return pair.sort((a,b) => { return a.compareTo(b); }).reverse().concat(kickers.slice(0,1));
    }

    return [];
  }
}

import Hand from './../entities/Hand.js';

export default class PairResolver {

  static tryResolvePair(hand) {
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
      if(pair.length > 2) {
        throw new Error('Two pairs in PairResolver is not allowed');
      }

      return pair.concat(kickers.slice(0,3));
    }

    return [];
  }
}

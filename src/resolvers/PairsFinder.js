import Hand from './../entities/Hand.js';

export default class PairsFinder {

  static getPairs(cards) {
    let pairs = [],
      kickers = [],
      j,
      counter = 0;

    cards.forEach((card, i) => {
      for(j = 0 + counter; j < cards.length; j++) {
        if(card.areEqual(cards[j]) && i !== j) {
          pairs.push(card);
          pairs.push(cards[j]);
        }
      }
      if(!pairs.includes(card))
      {
        kickers.push(card);
      }

      counter++;
    });

    return {
      'pairs' : pairs,
      'kickers' : kickers
    };
  }
}

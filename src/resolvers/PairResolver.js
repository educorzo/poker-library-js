import Hand from './../entities/Hand.js';

export default class PairResolver {

  static tryResolvePair(hand) {
    let pair = [];
    hand.getCards().forEach((card, i) => {
      hand.getCards().forEach((cardInCards, j) => {
        if(card.areEqual(cardInCards) && i !== j) {
          pair.push(card);
          pair.push(cardInCards);
        }
      });
    });

    return new Hand(pair);
  }
}

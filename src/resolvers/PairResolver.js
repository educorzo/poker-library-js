import PairsFinder from './PairsFinder.js';

export default class PairResolver {

  static tryResolvePair(hand) {
    let cards = hand.getCards(),
      pairs = PairsFinder.getPairs(cards),
      kickers = cards.filter(n => !pairs.includes(n));

    if(pairs.length > 0) {
      if(pairs.length > 2) {
        throw new Error('Two pairs in PairResolver is not allowed');
      }

      return pairs.concat(kickers.slice(0,3));
    }

    return [];
  }
}

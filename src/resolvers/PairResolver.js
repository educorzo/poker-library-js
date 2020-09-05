import Hand from './../entities/Hand.js';
import PairsFinder from './PairsFinder.js';

export default class PairResolver {

  static tryResolvePair(hand) {
    let cards = hand.getCards(),
      result = PairsFinder.getPairs(cards);

    if(result.pairs.length !== 0) {
      if(result.pairs.length > 2) {
        throw new Error('Two pairs in PairResolver is not allowed');
      }

      return result.pairs.concat(result.kickers.slice(0,3));
    }

    return [];
  }
}

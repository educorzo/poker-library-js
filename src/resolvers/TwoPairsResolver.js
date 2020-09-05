import Hand from './../entities/Hand.js';
import PairsFinder from './PairsFinder.js';

export default class TwoPairsResolver {

  static tryResolveTwoPairs(hand) {
    let cards = hand.getCards(),
      result = PairsFinder.getPairs(cards);

    if(result.pairs.length !== 0) {
      if(result.pairs.length < 4 ) {
        return [];
      } else if (result.pairs.length > 4) {
        throw new Error('More than two pairs in TwoPairsResolver is not allowed');
      }

      return result.pairs.sort((a,b) => { return a.compareTo(b); }).reverse().concat(result.kickers.slice(0,1));
    }

    return [];
  }
}

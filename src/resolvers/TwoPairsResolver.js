import Hand from './../entities/Hand.js';
import PairsFinder from './PairsFinder.js';
import Grouper from './Grouper.js';

export default class TwoPairsResolver {

  static tryResolveTwoPairs(hand) {
    let cards = hand.getCards(),
      pairs = PairsFinder.getPairs(cards),
      kickers = cards.filter(n => !pairs.includes(n));

    if(pairs.length > 0) {
      if(pairs.length < 4 ) {
        return [];
      } else if (pairs.length > 4) {
        throw new Error('More than two pairs in TwoPairsResolver is not allowed');
      }
      return pairs.sort((a,b) => { return a.compareTo(b); }).reverse()
        .concat(kickers.slice(0,1));
    }

    return [];
  }
}

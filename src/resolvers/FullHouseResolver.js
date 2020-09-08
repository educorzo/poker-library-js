import Hand from './../entities/Hand.js';
import TrioFinder from './TrioFinder.js';
import PairsFinder from './PairsFinder.js';

export default class FullHouseResolver {

  static tryResolveFullHouse(hand) {
    let cards = hand.getCards(),
      trio = TrioFinder.getTrio(cards),
      kickers = cards.filter(n => !trio.includes(n)),
      pairs = PairsFinder.getPairs(kickers);

    if(trio.length > 0 && pairs.length > 0) {
        return trio.concat(pairs.slice(0,2));
    }

    return [];
  }
}

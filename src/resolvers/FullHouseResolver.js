import Hand from './../entities/Hand.js';
import TrioFinder from './TrioFinder.js';
import PairsFinder from './PairsFinder.js';

export default class FullHouseResolver {

  static tryResolveFullHouse(hand) {
    let cards = hand.getCards(),
      trioFinder = new TrioFinder(),
      trio = trioFinder.getTrio(cards),
      kickers = cards.filter(n => !trio.includes(n)),
      pairs = PairsFinder.getPairs(kickers);

    if(trio.length > 0 && pairs.pairs.length > 0) {
        return trio.concat(pairs.pairs.slice(0,2));
    }

    return [];
  }
}

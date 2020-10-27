import TrioFinder from './TrioFinder.js';

export default class TrioResolver {

  static tryResolveTrio(hand) {
    let cards = hand.getCards(),
      trio = TrioFinder.getTrio(cards),
      kickers = cards.filter(n => !trio.includes(n));

    if(trio.length > 0) {
        return trio.concat(kickers.slice(0,2));
    }

    return [];
  }
}

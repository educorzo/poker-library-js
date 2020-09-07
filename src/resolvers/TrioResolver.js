import Hand from './../entities/Hand.js';
import TrioFinder from './TrioFinder.js';

export default class TrioResolver {

  static tryResolveTrio(hand) {
    let cards = hand.getCards(),
      trioFinder = new TrioFinder(),
      trio = trioFinder.getTrio(cards),
      kickers = cards.filter(n => !trio.includes(n));

    if(trio.length > 0) {
        return trio.concat(kickers.slice(0,2));
    }
    
    return [];
  }
}

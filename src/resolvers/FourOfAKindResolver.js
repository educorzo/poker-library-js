import Hand from './../entities/Hand.js';
import Card from './../entities/Card.js';
import Grouper from './Grouper.js';

export default class FourOfAKindResolver {

  static tryResolveFourOfAKind(hand) {
    let cards = hand.getCards(),
        cardsGroupByRank = Grouper.groupByRank(cards),
        result = [],
        kickers = [];

    cardsGroupByRank.forEach((group) => {
      if(group.length === 4 && group[0].compareTo(result[0]) === 1) {
          result = group;
      }
    });

    if(result.length > 0 ) {
        kickers = cards.filter(n => !result.includes(n))
        return result.concat(kickers.slice(0,1));
    }
    return result;
  }
}

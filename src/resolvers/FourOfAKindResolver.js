import Hand from './../entities/Hand.js';
import Card from './../entities/Card.js';

export default class FourOfAKindResolver {

  static tryResolveFourOfAKind(hand) {
    let cards = hand.getCards(),
        cardsGroupByRank = FourOfAKindResolver.groupByRank(cards),
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

  /*private*/
  static groupByRank(cards) {
      const map = new Map();

      cards.forEach((card) => {
           const key = card.getRank().toString();
           const collection = map.get(key);
           if (!collection) {
               map.set(key, [card]);
           } else {
               collection.push(card);
           }
      });

      return map;
    }
}

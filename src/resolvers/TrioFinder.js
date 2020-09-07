import Hand from './../entities/Hand.js';

export default class TrioFinder {

  getTrio(cards) {
    let result = [],
      cardsGroupByRank = this.groupByRank(cards);

    cardsGroupByRank.forEach((group) => {
      if(group.length === 3 && group[0].compareTo(result[0]) === 1) {
        result = group;
      }
    });

    return result;
  }

  groupByRank(cards) {
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

import Grouper from './Grouper.js';

export default class TrioFinder {

  static getTrio(cards) {
    let result = [],
      cardsGroupByRank = Grouper.groupByRank(cards);

    cardsGroupByRank.forEach((group) => {
      if(group.length === 3 && group[0].compareTo(result[0]) === 1) {
        result = group;
      }
    });

    return result;
  }
}

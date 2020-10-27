import Grouper from './Grouper.js';

export default class PairsFinder {

  static getPairs(cards) {
    let result = [],
      cardsGroupByRank = Grouper.groupByRank(cards);

    cardsGroupByRank.forEach((group) => {
      if(group.length === 2) {
        result = result.concat(group);
      }
    });

    return result;
  }
}

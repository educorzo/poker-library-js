export default class Grouper {

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

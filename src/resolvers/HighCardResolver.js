import Hand from './../entities/Hand.js';

export default class HighCardResolver {
  static resolveHighCard(hand) {
    let cardsInOrder = Array.from(hand.getCards())
      .sort((a,b) => { return a.compareTo(b); }).reverse();

    return new Hand(cardsInOrder);
  }
}

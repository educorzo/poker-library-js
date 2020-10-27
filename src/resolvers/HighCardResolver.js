export default class HighCardResolver {
  
  static resolveHighCard(hand) {
    let bestFiveCards = Array.from(hand.getCards()).slice(0, 5);

    return bestFiveCards;
  }
}

export default class FlushResolver {

  static tryResolveFlush(hand) {
    let cards = hand.getCards(),
        cardsBySuit = {},
        result = [];

    cards.forEach((card, i) => {
      if(cardsBySuit[card.getSuit().toString()] !== undefined) {
        cardsBySuit[card.getSuit().toString()].push(card);
      } else {
        cardsBySuit[card.getSuit().toString()] = [];
        cardsBySuit[card.getSuit().toString()].push(card);
      }
    });

    for(var key in cardsBySuit) {
      if(cardsBySuit[key].length >= 5 && cardsBySuit[key][0].compareTo(result[0]) > 0) {
        result = cardsBySuit[key];
      }
    }

    return result;
  }
}

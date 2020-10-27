export default class Hand {
  constructor(cards) {
    if(cards !== undefined) {
      this._cards = Array.from(cards)
        .sort((a,b) => { return a.compareTo(b); }).reverse();
    } else {
      throw new Error('Undefined hand is not allowed');
    }
  }

  getCards() {
    return this._cards;
  }

  isEmpty() {
      return this._cards.length === 0;
  }

  numberOfCards() {
    return this._cards.length;
  }

  toString(){
    let result = '';

    for (var card of this._cards) {
        result += card.toString() + ' ';
    }

    return result.substring(0, result.length - 1);;
  }
}

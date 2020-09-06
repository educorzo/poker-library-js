export default class Suit {
  constructor(suit) {
    if(!Suit.isValid(suit)) {
      throw new Error(`${suit} is not a valid suit`);
    }
    this._suit = suit;
  }

  static isValid(suit) {
    return suit !== undefined && suit.length == 1 && Suit.validSuits.includes(suit);
  }

  toString() {
    return this._suit.toString();
  }
}

Suit.validSuits = ['d', 's', 'c', 'h'];

import Card from './../entities/Card.js';
import Rank from './../entities/Rank.js';
import Suit from './../entities/Suit.js';

export function parseCard(cardRaw) {
  return new Card(new Rank(cardRaw.charAt(0)), new Suit(cardRaw.charAt(1)));
}

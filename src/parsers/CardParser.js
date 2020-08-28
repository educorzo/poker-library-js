import Card from './../entities/Card.js';
import Rank from './../entities/Rank.js';

export function parseCard(cardRaw) {
  return new Card(new Rank(cardRaw.charAt(0)), cardRaw.charAt(1));
}

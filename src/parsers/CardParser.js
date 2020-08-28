import Card from './../entities/Card.js';

export function parseCard(cardRaw) {
  return new Card(cardRaw.charAt(0), cardRaw.charAt(1));
}

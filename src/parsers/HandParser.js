import Hand from './../entities/Hand.js';
import * as CardParser from './CardParser.js';

export function parseHand(handRaw) {
  let cards = new Set();

  handRaw.split(' ').forEach(function(cardRaw) {
    cards.add(CardParser.parseCard(cardRaw));
  });

  if(cards.size < 5) {
    throw new Error('A hand with less than 5 cards is not allowed');
  }

  return new Hand(cards);
}

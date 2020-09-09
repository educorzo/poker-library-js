import Hand from './../entities/Hand.js';
import * as CardParser from './CardParser.js';

export function parseHand(handRaw) {
  let cards = new Set();

  handRaw.split(' ').forEach(function(cardRaw) {
    cards.add(CardParser.parseCard(cardRaw));
  });

  if(cards.length < 5) {
    throw new Error('Hand with less than five cards is not allowed');
  }

  return new Hand(cards);
}

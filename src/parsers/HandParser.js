import Hand from './../entities/Hand.js';
import * as CardParser from './CardParser.js';

export function parseHand(handRaw) {
  let cards = new Set();

  handRaw.split(' ').forEach(function(cardRaw) {
    cards.add(CardParser.parseCard(cardRaw));
  });

  return new Hand(cards);
}

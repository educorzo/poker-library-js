import Hand from './../entities/Hand.js';
import * as CardParser from './CardParser.js';

export function parseHand(handRaw) {
  let cards = new Set([CardParser.parseCard(handRaw.substring(3,5))]);

  return new Hand(cards);
}

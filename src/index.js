import * as HandParser from './parsers/HandParser.js';
import HandsComparer from './HandsComparer.js';

/*
 * @param {string} player1
 * @param {string} player2
 * @return > 0 if player1 is winner, < 0 if player2 is winner, 0 if both
 */
export function compareTwoHands(player1, player2) {
  let handsComparer = new HandsComparer(),
    hand1 = HandParser.parseHand(player1),
    hand2 = HandParser.parseHand(player2);

  return handsComparer.compare(hand1, hand2);
}

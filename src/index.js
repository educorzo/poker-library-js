import * as HandParser from './parsers/HandParser.js';

export function compareTwoHands(player1, player2) {
  let hand1 = HandParser.parseHand(player1);
  let hand2 = HandParser.parseHand(player2);

  return hand1.compareTo(hand2) > 0 ? 'player 1' : 'player 2';
}

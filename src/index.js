import * as HandParser from './parsers/HandParser.js';

export function compareTwoHands(player1, player2) {
  let hand1 = HandParser.parseHand(player1),
    hand2 = HandParser.parseHand(player2),
    result = hand1.compareTo(hand2);

  if(result === 1) {
    return 'player 1';
  } else if (result == 0) {
    return 'both';
  }

  return 'player 2';
}

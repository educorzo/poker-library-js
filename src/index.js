import * as HandParser from './parsers/HandParser.js';
import HandsComparer from './HandsComparer.js';

export function compareTwoHands(player1, player2) {
  let handsComparer = new HandsComparer(),
    hand1 = HandParser.parseHand(player1),
    hand2 = HandParser.parseHand(player2),
    result = handsComparer.compare(hand1, hand2);

  if(result === 1) {
    return 'player 1';
  } else if (result == 0) {
    return 'both';
  }

  return 'player 2';
}

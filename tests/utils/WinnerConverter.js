export function winnerHand(player1, player2, winner) {
  if(winner > 0) {
    return player1;
  } else if (winner === 0) {
    return 'both';
  }

  return player2;
}

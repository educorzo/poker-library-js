import Hand from './../../src/entities/Card.js';

export function toString(cards) {
  if(cards.length == 0) {
    return ' ';
  }
  
  return cards.reduce((result, currentCard) => result + ' ' + currentCard.toString());
}

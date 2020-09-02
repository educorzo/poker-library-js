import Card from './entities/Card.js';
import HighCardResolver from './resolvers/HighCardResolver.js';
import PairResolver from './resolvers/PairResolver.js';

export default class HandsComparer {

   compare(hand1, hand2) {
     let bestCards1, bestCards2, result = 0;

     result = this.resolvePair(hand1, hand2);

     if(result == 0) {
       return this.resolveHighCard(hand1, hand2);
     } else {
       return result;
     }
  }

  resolvePair(hand1, hand2) {
    let bestCards1, bestCards2;
     bestCards1 = PairResolver.tryResolvePair(hand1);
     bestCards2 = PairResolver.tryResolvePair(hand2);

     if(bestCards1.length !== 0) {
       if(bestCards2.length !== 0) {
         return 0;
       }
       return 1;
     } else if(bestCards2.length !== 0) {
       return -1;
     }
     
     return 0;
  }

  resolveHighCard(hand1, hand2) {
    let bestCards1 = HighCardResolver.resolveHighCard(hand1),
      bestCards2 = HighCardResolver.resolveHighCard(hand2);

    return this.resolveByHighestCard(bestCards1, bestCards2);
  }

  /*private*/
  resolveByHighestCard(hand1, hand2) {
    let index = 0,
      result = 0;

    for(index; index < 5; index++) {
      result = hand1[index].compareTo(hand2[index]);
      if(result !== 0) {
        return result;
      }
    }

    return result;
  }
}

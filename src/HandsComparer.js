import Card from './entities/Card.js';
import HighCardResolver from './resolvers/HighCardResolver.js';
import PairResolver from './resolvers/PairResolver.js';
import TwoPairsResolver from './resolvers/TwoPairsResolver.js';
import TrioResolver from './resolvers/TrioResolver.js';
import StraightResolver from './resolvers/StraightResolver.js';
import FlushResolver from './resolvers/FlushResolver.js';
import FullHouseResolver from './resolvers/FullHouseResolver.js';

export default class HandsComparer {

   compare(hand1, hand2) {
     let bestCards1, bestCards2,
      result = this.resolve(hand1, hand2, FullHouseResolver.tryResolveFullHouse);

      if(result == 0) {
        result = this.resolve(hand1, hand2, FlushResolver.tryResolveFlush);
        if(result == 0) {
          result = this.resolve(hand1, hand2, StraightResolver.tryResolveStraight);
          if(result == 0) {
            result = this.resolve(hand1, hand2, TrioResolver.tryResolveTrio);
            if(result == 0) {
              result = this.resolve(hand1, hand2, TwoPairsResolver.tryResolveTwoPairs);
              if(result == 0) {
                result = this.resolve(hand1, hand2, PairResolver.tryResolvePair);
                if(result == 0) {
                 return this.resolve(hand1, hand2, HighCardResolver.resolveHighCard);
                }
              }
            }
          }
        }
      }

     return result;
  }

  /*private*/
  resolve(hand1, hand2, resolver) {
    let bestCards1, bestCards2;
     bestCards1 = resolver(hand1);
     bestCards2 = resolver(hand2);

     if(bestCards1.length !== 0) {
       if(bestCards2.length !== 0) {
         return this.resolveByHighestCard(bestCards1, bestCards2);
       }
       return 1;
     } else if(bestCards2.length !== 0) {
       return -1;
     }

     return 0;
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

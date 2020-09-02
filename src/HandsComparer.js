import Hand from './entities/Hand.js';
import HighCardResolver from './resolvers/HighCardResolver.js';
import PairResolver from './resolvers/PairResolver.js';

export default class HandsComparer {

   compare(hand1, hand2 ) {
     let hand1Resolved, hand2Resolved;
      hand1Resolved = PairResolver.tryResolvePair(hand1);
      hand2Resolved = PairResolver.tryResolvePair(hand2);

      if(!hand1Resolved.isEmpty())
      {
        return 1;
      } else {
        hand1Resolved = HighCardResolver.resolveHighCard(hand1),
        hand2Resolved = HighCardResolver.resolveHighCard(hand2);

        return this.resolveHighestCard(hand1Resolved, hand2Resolved);
      }
  }

  /*private*/
  resolveHighestCard(hand1, hand2) {
    let index = 0,
      result = 0;

    for(index; index < 5; index++) {
      result = hand1.getCards()[index]
        .compareTo(hand2.getCards()[index]);
      if(result !== 0) {
        return result;
      }
    }

    return result;
  }
}

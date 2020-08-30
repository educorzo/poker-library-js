import Hand from './entities/Hand.js';
import HighCardResolver from './resolvers/HighCardResolver.js';

export default class HandsComparer {

   compare(hand1, hand2 ) {
    let hand1Resolved = HighCardResolver.resolveHighCard(hand1),
      hand2Resolved = HighCardResolver.resolveHighCard(hand2),
      index = 0,
      result = 0;

      for(index; index < 5; index++) {
        result = hand1Resolved.getCards()[index]
          .compareTo(hand2Resolved.getCards()[index]);
        if(result !== 0) {
          return result;
        }
      }

    return result;
  }
}

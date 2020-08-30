import Hand from './entities/Hand.js';
import HighCardResolver from './resolvers/HighCardResolver.js';

export default class HandsComparer {

   compare(hand1, hand2 ) {
    let hand1Resolved = HighCardResolver.resolveHighCard(hand1),
      hand2Resolved = HighCardResolver.resolveHighCard(hand2);

    return this.resolveTie(hand1Resolved, hand2Resolved);
  }

  /*private*/
  resolveTie(hand1, hand2) {
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

import Hand from './../entities/Hand.js';
import FlushResolver from './FlushResolver.js';
import StraightResolver from './StraightResolver.js';

export default class StraightFlushResolver {

  static tryResolveStraightFlush(hand) {
    let cards = FlushResolver.tryResolveFlush(hand);

    return StraightResolver.tryResolveStraight(new Hand(cards));
  }
}

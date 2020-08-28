import * as Poker from './../src/index.js';

describe('Comparing two hands', function () {
	describe('and there is nothing special', function () {
		it('should win the hand with highest card', function () {
			var winnerHand = Poker.compareTwoHands('Ad 2d 3d 7s 5h', '4d 2s 3s 7d 5c');

			expect(winnerHand).toEqual('Ad 2d 3d 7s 5h');
		});
	});
});

import * as Poker from './../src/index.js';

describe('Comparing two hands', function () {
	describe('and there is nothing special', function () {
		const testCases = [
    	{ hand1: '2d Ad 3d 7s 5h', hand2: '4d 2s 3s 7d 5c', winnerHand: 'player 1' },
    	{ hand1: '4d 2s 3s 7d 5c', hand2: '2d Ad 3d 7s 5h', winnerHand: 'player 2' },
			{ hand1: '2d Ad 3d 7s 5h', hand2: '2s Ah 3s 7d 5s', winnerHand: 'both'},
			{ hand1: 'Ad 4h 3d 8s 5h', hand2: 'Ah 2s 3s 7d 5s', winnerHand: 'player 1'}, //Tie in A card
		];

		testCases.forEach((test, index) => {
			describe(`with cards ${test.hand1} and ${test.hand2}`, () => {
				it(`should win ${test.winnerHand}`, () =>  {
					let winnerHand = Poker.compareTwoHands(test.hand1, test.hand2);

					expect(winnerHand).toEqual(test.winnerHand);
				});
			});
 		});
	});
});

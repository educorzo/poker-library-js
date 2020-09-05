import * as Poker from './../src/index.js';

describe('Comparing two hands', function () {
	describe('and there is nothing special', function () {
		const testCases = [
    	{ hand1: '2d Ad 3d 7s 5h', hand2: '4d 2s 3s 7d 5c', winnerHand: 'player 1' },
    	{ hand1: '4d 2s 3s 7d 5c', hand2: '2d Ad 3d 7s 5h', winnerHand: 'player 2' },
			{ hand1: '2d Ad 3d 7s 5h', hand2: '2s Ah 3s 7d 5s', winnerHand: 'both' },
			{ hand1: 'Ad 4h 3d 8s 5h', hand2: 'Ah 2s 3s 7d 5s', winnerHand: 'player 1' }, //Tie in A card
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

	describe('and there is a pair', function () {
		const testCases = [
			{ hand1: '2d 2h 3d 7s 5h', hand2: 'Ad 2s 3s 7d 5c', winnerHand: 'player 1' },
			{ hand1: 'Ad 2s 3s 7d 5c', hand2: '2d 2h 3d 7s 5h', winnerHand: 'player 2' },
			{ hand1: '2d 2h 3d 7s 5h', hand2: 'Ad As 3s 7d 5c', winnerHand: 'player 2' },
			{ hand1: 'Ad Ah Qd 7s 5h', hand2: 'Ad As 3s 7d 5c', winnerHand: 'player 1' },
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

	describe('and there is two pairs', function () {
		const testCases = [
			{ hand1: '2d 2h 3d 3s 5h', hand2: 'Ac As 3s 7d 5c', winnerHand: 'player 1' },
			{ hand1: 'Ad As 3s 7d 5c', hand2: '2d 2h 3d 3s 5h', winnerHand: 'player 2' },
			{ hand1: '2d 2h 3d 3c 5h', hand2: 'Ad As 3s 3h 5c', winnerHand: 'player 2' },
			{ hand1: 'Ad Ah Qd Qs 5h', hand2: 'Ad As Qc Qh 2c', winnerHand: 'player 1' },
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

	describe('and there is a straight', function () {
		const testCases = [
			{ hand1: '8c 4s 6s 7d 5c', hand2: '2d 2h 3d 3s 5h', winnerHand: 'player 1' },
			{ hand1: '2d 2h 3d 3s 5h', hand2: '8c 4s 6s 7d 5c', winnerHand: 'player 2' },
			{ hand1: '7c 3s 5s 6d 4c', hand2: '8c 4s 6s 7d 5c', winnerHand: 'player 2' },
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

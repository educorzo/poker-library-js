import * as Poker from './../src/index.js';
import * as Converter from './utils/WinnerConverter.js';

describe('Comparing two hands', function () {
	const tests = function(testCases) {
		testCases.forEach((test, index) => {
			describe(`with cards ${test.hand1} and ${test.hand2}`, () => {
				it(`should win ${Converter.winnerHand(test.hand1, test.hand2, test.winnerHand)}`, () =>  {
					let winnerHand = Poker.compareTwoHands(test.hand1, test.hand2);

					expect(Converter.winnerHand(test.hand1, test.hand2, winnerHand))
						.toEqual(test.winnerHand);
				});
			});
		});
	};

	describe('and there is nothing special', function () {
		const testCases = [
    	{ hand1: '2d Ad 3d 7s 5h', hand2: '4d 2s 3s 7d 5c', winnerHand: '2d Ad 3d 7s 5h' },
    	{ hand1: '4d 2s 3s 7d 5c', hand2: '2d Ad 3d 7s 5h', winnerHand: '2d Ad 3d 7s 5h' },
			{ hand1: '2d Ad 3d 7s 5h', hand2: '2s Ah 3s 7d 5s', winnerHand: 'both' },
			{ hand1: 'Ad 4h 3d 8s 5h', hand2: 'Ah 2s 3s 7d 5s', winnerHand: 'Ad 4h 3d 8s 5h' } //Tie in A card
		];

		tests(testCases);
	});

	describe('and there is a pair', function () {
		const testCases = [
			{ hand1: '2d 2h 3d 7s 5h', hand2: 'Ad 2s 3s 7d 5c', winnerHand: '2d 2h 3d 7s 5h' },
			{ hand1: 'Ad 2s 3s 7d 5c', hand2: '2d 2h 3d 7s 5h', winnerHand: '2d 2h 3d 7s 5h' },
			{ hand1: '2d 2h 3d 7s 5h', hand2: 'Ad As 3s 7d 5c', winnerHand: 'Ad As 3s 7d 5c' },
			{ hand1: 'Ad Ah Qd 7s 5h', hand2: 'Ad As 3s 7d 5c', winnerHand: 'Ad Ah Qd 7s 5h' }
		];

		tests(testCases);
	});

	describe('and there is two pairs', function () {
		const testCases = [
			{ hand1: '2d 2h 3d 3s 5h', hand2: 'Ac As 3s 7d 5c', winnerHand: '2d 2h 3d 3s 5h' },
			{ hand1: 'Ad As 3s 7d 5c', hand2: '2d 2h 3d 3s 5h', winnerHand: '2d 2h 3d 3s 5h' },
			{ hand1: '2d 2h 3d 3c 5h', hand2: 'Ad As 3s 3h 5c', winnerHand: 'Ad As 3s 3h 5c' },
			{ hand1: 'Ad Ah Qd Qs 5h', hand2: 'Ad As Qc Qh 2c', winnerHand: 'Ad Ah Qd Qs 5h' }
		];

		tests(testCases);
	});

	describe('and there is three of a Kind', function () {
		const testCases = [
			{ hand1: 'Td Ts Tc 2d 5d', hand2: 'Ad Ah Qd Qs 5h', winnerHand: 'Td Ts Tc 2d 5d' },
			{ hand1: 'Ad Ah Qd Qs 5h', hand2: 'Td Ts Tc 2d 5d', winnerHand: 'Td Ts Tc 2d 5d' },
			{ hand1: '9d 9h 9d Qs 5h', hand2: 'Td Ts Tc 2d 5d', winnerHand: 'Td Ts Tc 2d 5d' }
		];

		tests(testCases);
	});

	describe('and there is a straight', function () {
		const testCases = [
			{ hand1: '8c 4s 6s 7d 5c', hand2: '2d 2h 3d 3s 5h', winnerHand: '8c 4s 6s 7d 5c' },
			{ hand1: '2d 2h 3d 3s 5h', hand2: '8c 4s 6s 7d 5c', winnerHand: '8c 4s 6s 7d 5c' },
			{ hand1: '7c 3s 5s 6d 4c', hand2: '8c 4s 6s 7d 5c', winnerHand: '8c 4s 6s 7d 5c' }
		];

		tests(testCases);
	});

	describe('and there is a flush', function () {
		const testCases = [
			{ hand1: '8d 4d Td 2d 5d', hand2: '8c 7d 6s 5c 4s', winnerHand: '8d 4d Td 2d 5d' },
			{ hand1: '8c 7d 6s 5c 4s', hand2: '8d 4d Td 2d 5d', winnerHand: '8d 4d Td 2d 5d' },
			{ hand1: '8c 4c Kc 2c 5c', hand2: '8d 4d Td 2d 5d', winnerHand: '8c 4c Kc 2c 5c' }
		];

		tests(testCases);
	});

	describe('and there is a full house', function () {
		const testCases = [
			{ hand1: '8d 2c 8c 2d 2s', hand2: '8d 4d Td 2d 5d', winnerHand: '8d 2c 8c 2d 2s' },
			{ hand1: '8d 4d Td 2d 5d', hand2: '8d 2c 8c 2d 2s', winnerHand: '8d 2c 8c 2d 2s' },
			{ hand1: '8d Kc 8c Kd Ks', hand2: 'Ad Ac As 4c 4d', winnerHand: 'Ad Ac As 4c 4d' }
		];

		tests(testCases);
	});

	describe('and there is a four of a kind', function () {
		const testCases = [
			{ hand1: '9s 9c 9d 9h 2d', hand2: '8d 2c 8c 2d 2s', winnerHand: '9s 9c 9d 9h 2d' },
			{ hand1: '8d 2c 8c 2d 2s', hand2: '9s 9c 9d 9h 2d', winnerHand: '9s 9c 9d 9h 2d' },
			{ hand1: '8d Ac Ad Ah As', hand2: '9s 9c 9d 9h 2d', winnerHand: '8d Ac Ad Ah As' }
		];

		tests(testCases);
	});

	describe('and there is a straight flush', function () {
		const testCases = [
			{ hand1: '5s 6s 7s 8s 9s', hand2: 'As Ad Ah Ac 2d', winnerHand: '5s 6s 7s 8s 9s' },
			{ hand2: 'As Ad Ah Ac 2d', hand1: '5s 6s 7s 8s 9s', winnerHand: '5s 6s 7s 8s 9s' },
			{ hand1: '5s 6s 7s 8s 9s', hand2: 'Ts Js Qs Ks As', winnerHand: 'Ts Js Qs Ks As' } //Royal flush
		];

		tests(testCases);
	});
});

import * as Poker from './../src/index.js';
describe('Comparing two hands', function () {
	it('check everything is working as expected', function () {
		var poker  = Poker.compareTwoHands('','');
		expect(true).toEqual(true);
	});
});

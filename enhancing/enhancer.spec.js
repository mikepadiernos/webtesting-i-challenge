const enhancer = require('./enhancer.js');

describe("Perform our tests", () => {
	describe("Repair", () => {
		it('should accept an item with durability at 100', () => {
			expect(enhancer.repair({ name: 'Bronze Sword',	durability: 10,	enhancement: 3 })).toEqual({
				name: 'Bronze Sword',
				durability: 100,
				enhancement: 3
			})
		});
	})
	describe("Succeed", () => {
		it('should keep the enhancement level unchanged', () => {
			expect(enhancer.succeed({ name: 'Emerald Sword', durability: 0, enhancement: 20 })).toEqual({
				name: 'Emerald Sword',
				durability: 0,
				enhancement: 20
			})
		});
	})
	describe("Fail", () => {
		it('should have the item\'s enhancement decrease by 1 and durability by 10 if enhancement is greater than 16', () => {
			expect(enhancer.fail({ name: 'Plate Armor of Protection', durability: 98, enhancement: 25 })).toEqual({
				name: 'Plate Armor of Protection',
				durability: 88,
				enhancement: 24
			})
		});
	})
})

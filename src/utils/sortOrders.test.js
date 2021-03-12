import React from 'react'
import { unstable_batchedUpdates } from 'react-dom';
import { fakeOrders } from '../data/fakeOrders';
import { getSortFunction, sortByDate, sortByItemCount, sortOrders, sortTypes } from './sortOrders';

describe('sortByItemCount function', () => {
	const cases = [
		[{ items: ['item1', 'item2'] }, { items: ['1', '2'] }, 0],
		[{ items: ['item1'] }, { items: ['1', '2'] }, -1],
		[{ items: ['item1', 'item2'] }, { items: ['1'] }, 1],
		[Int16Array, Int16Array, 0],
		[{ items: null }, { items: null }, 0],
		[null, null, 0]
	];

	test.each(cases)('(%i, %i , %i)', (firstArg, secondArg, expectedResult) => {
		const result = sortByItemCount(firstArg, secondArg);
		expect(result).toBe(expectedResult);
	})
});

describe('sortOrders function', () => {
	it('orders are null', () => {
		const result = sortOrders(null, getSortFunction(sortTypes.COUNT));
		expect(result).toEqual(undefined);
	});

	it('sortfunction are null', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const orders = [order1, order2];

		const result = sortOrders(orders, null);
		expect(result).toEqual(undefined);
	});

});


describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not object', () => {
		const result = sortByDate(Int16Array, Int16Array);
		expect(result).toEqual(0);
	});

	const cases = [
		[{ items: ['item1', 'item2'] }, { items: ['1', '2'] }, 0],
		[{ date: 154234232432 }, { date: 15523424 }, -1],
		[{ date: 15523424 }, { date: 154234232432 }, 1],
		[{ date: 154234232432 }, { date: 154234232432 }, 0],
		[Int16Array, Int16Array, 0],
		[null, null, 0]
	];

	test.each(cases)('(%i, %i , %i)', (firstArg, secondArg, expectedResult) => {
		const result = sortByDate(firstArg, secondArg);
		expect(result).toBe(expectedResult);
	})
});
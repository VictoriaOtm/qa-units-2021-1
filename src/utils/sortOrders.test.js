import React from 'react'
import {sortOrders, sortByDate, sortByItemCount} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('more than first', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	it('more than second', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('orders are undefined', () => {
		const result = sortByItemCount(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('all items are null', () => {
		const order1 = {
			items: null,
		};

		const order2 = {
			items: null,
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('items1 contains null', () => {
		const order1 = {
			items: [null],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('items2 contains null', () => {
		const order1 = {
			items: ['1'],
		};

		const order2 = {
			items: [null],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('items are undefined', () => {
		const order1 = {
			items: undefined,
		};

		const order2 = {
			items: undefined,
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('items1 contains undefined', () => {
		const order1 = {
			items: [undefined],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('items2 contains undefined', () => {
		const order1 = {
			items: ['1'],
		};

		const order2 = {
			items: [undefined],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('same dates', () => {
		const order1 = {
			date: new Date(1998, 11, 27),
		};

		const order2 = {
			date: new Date(1998, 11, 27),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('more than first', () => {
		const order1 = {
			date: new Date(1998, 1, 27),
		};

		const order2 = {
			date: new Date(1998, 11, 14),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('more than second', () => {
		const order1 = {
			date: new Date(1998, 1, 14),
		};

		const order2 = {
			date: new Date(1998, 11, 27),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('orders are undefined', () => {
		const result = sortByDate(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('all dates are null', () => {
		const order1 = {
			date1: null,
		};

		const order2 = {
			date2: null,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('date1 is null', () => {
		const order1 = {
			date1: null,
		};

		const order2 = {
			date2: new Date(1998, 1, 14),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('date2 is null', () => {
		const order1 = {
			date1: new Date(1998, 1, 14),
		};

		const order2 = {
			date2: null,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('date1 is undefined', () => {
		const order1 = {
			date1: undefined,
		};

		const order2 = {
			date2: new Date(1998, 1, 14),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('date2 is undefined', () => {
		const order1 = {
			date1: new Date(1998, 1, 14),
		};

		const order2 = {
			date2: undefined,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortOrders function', () => {
	it('orders, sortFunc are null', () => {
		const result = sortOrders(null, null);
		expect(result).toEqual(undefined);
	});

	it('sortFunc are null', () => {
		const result = sortOrders([1, 2], null);
		expect(result).toEqual(undefined);
	});
});

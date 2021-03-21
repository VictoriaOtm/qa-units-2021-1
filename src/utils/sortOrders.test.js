import React from 'react'
import {sortByItemCount} from './sortOrders';
import {sortByDate} from './sortOrders';
import {getSortFunction} from './sortOrders';
import {sortTypes} from './sortOrders';
import {sortOrders} from './sortOrders';

describe('sortByItemCount', () => {
	it('ords are null', () => {
		const res = sortByItemCount(null, null);
		expect(res).toBe(0);
	});

	it('null ord1', () => {
		const ord1 = null;

		const ord2 = {
			items: ['asf', 'aae8fga'],
		};
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(0);
	});

	it('null ord2', () => {
		const ord1 = {
			items: ['asf', 'aae8fga'],
		};

		const ord2 = null;
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(0);
	});

	it('undefined ords', () => {
		const res = sortByItemCount(undefined, undefined);
		expect(res).toBe(0);
	});

	it('undefined ord1', () => {
		const ord1 = undefined;
		const ord2 = {
			items: ['asf', 'aae8fga'],
		};
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(0);
	});

	it('undefined ord2', () => {
		const ord1 = {
			items: ['asf', 'aae8fga'],
		};
		const ord2 = undefined;
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(0);
	});

	it('undefined ords.items', () => {
		const ord1 = {
			items: undefined,
		};
		const ord2 = {
			items: undefined,
		};
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(0);
	});

	it('undefined ords1.items', () => {
		const ord1 = {
			items: undefined,
		};
		const ord2 = {
			items: ['asf', 'aae8fga'],
		};
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(0);
	});

	it('undefined ords2.items', () => {
		const ord1 = {
			items: ['asf', 'aae8fga'],
		};
		const ord2 = {
			items: undefined,
		};
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(0);
	});

	it('objects1.length < items2.length:', () => {
		const ord1 = {
			items: ['object1', 'object2'],
		};
		const ord2 = {
			items: ['asf', 'aae8fga', 'alskdufauef'],
		};
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(-1);
	});

	it('objects count', () => {
		const ord1 = {
			items: ['object1', 'object2'],
		};
		const ord2 = {
			items: ['asf', 'aae8fga'],
		};
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(0);
	});

	it('objects1.length > items2.length:', () => {
		const ord1 = {
			items: ['object1', 'object2', 'object3'],
		};
		const ord2 = {
			items: ['asf', 'aae8fga'],
		};
		const res = sortByItemCount(ord1, ord2);
		expect(res).toBe(1);
	});
});

describe('sortByDate', () => {
	it('null ord', () => {
		const res = sortByDate(null, null);
		expect(res).toBe(0);
	});

	it('null ord1', () => {
		const ord1 = null;
		const ord2 = {
			date: 123,
		};
		const res = sortByDate(ord1, ord2);
		expect(res).toBe(0);
	});

	it('null ord2', () => {
		const ord1 = {
			date: 123,
		};
		const ord2 = null;
		const res = sortByDate(ord1, ord2);
		expect(res).toBe(0);
	});

	it('undefined ords', () => {
		const res = sortByDate(undefined, undefined);
		expect(res).toBe(0);
	});

	it('undefined ord1', () => {
		const ord1 = undefined;
		const ord2 = {
			date: 123,
		};
		const res = sortByDate(ord1, ord2);
		expect(res).toBe(0);
	});

	it('undefined ord2', () => {
		const ord1 = {
			date: 123,
		};
		const ord2 = undefined;
		const res = sortByDate(ord1, ord2);
		expect(res).toBe(0);
	});

	it('undefined ords.date', () => {
		const ord1 = {
			date: undefined,
		};
		const ord2 = {
			date: undefined,
		};
		const res = sortByDate(ord1, ord2);
		expect(res).toBe(0);
	});

	it.each([
		[{date: undefined}, {date: 123}, 0],
		[{date: 123}, {date: undefined}, 0],
		[{date: undefined}, {date: undefined}, 0],
		[{date: 123}, {date: 202}, 1],
		[{date: 202}, {date: 123}, -1],
		[{date: 123}, {date: 123}, 0],
	])('items is null', (order1, order2, expected) => {
		expect((sortByDate(order1, order2))).toEqual(expected);
	});
});

describe('getSortFunction', () => {
	it('sortType is null', () => {
		const res = getSortFunction(null);
		expect(res).toBeUndefined();
	});
	it('sortType -> sortTypes.DATE', () => {
		const res = getSortFunction(sortTypes.DATE);
		expect(res).toEqual(sortByDate);
	});
	it('sortType -> sortTypes.COUNT', () => {
		const res = getSortFunction(sortTypes.COUNT);
		expect(res).toEqual(sortByItemCount);
	});
});

describe('sortOrders', () => {
	it('sortFunction -> sortByItemCount', () => {
		const ords = [
			{
				items: ['asf', 'aae8fga', 'asdfhbasodhf', 'aksdhfbasjdhoaisdfbhpaisdf'],
			},
			{
				items: ['asf', 'aae8fga', 'isahdfboias'],
			},
			{
				items: ['asf', 'aae8fga'],
			}
		];
		const ordsSorted = [
			{
				items: ['asf', 'aae8fga'],
			},
			{
				items: ['asf', 'aae8fga', 'isahdfboias'],
			},
			{
				items: ['asf', 'aae8fga', 'asdfhbasodhf', 'aksdhfbasjdhoaisdfbhpaisdf'],
			}
		];
		const res = sortOrders(ords, sortByItemCount);
		expect(res).toBeUndefined();
		expect(ords).toEqual(ordsSorted);
	});
	it('ords is undefined', () => {
		const res = sortOrders(undefined, sortByDate);
		expect(res).toBeUndefined();
	});

	it('ords empty', () => {
		const ords = [];
		const res = sortOrders(ords, sortByDate);
		expect(res).toBeUndefined();
	});

	it('null sortFunction', () => {
		const ords = [0, 1];
		const res = sortOrders(ords, null);
		expect(res).toBeUndefined();
	});

	it('undefined sortFunction', () => {
		const ords = [0, 1];
		const res = sortOrders(ords, undefined);
		expect(res).toBeUndefined();
	});
});
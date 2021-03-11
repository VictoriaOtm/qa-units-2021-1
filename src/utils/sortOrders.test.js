import React from 'react'
import {sortOrders} from './sortOrders';
import {getSortFunction} from './sortOrders';
import {sortByDate} from './sortOrders';
import {sortByItemCount} from './sortOrders';
import {sortTypes} from './sortOrders';
import {fakeOrders} from "../data/fakeOrders";
import {getDate} from "./getDate";

describe('sortOrders function', () => {
	it('null orders', function () {
		const sortFunctionMock = jest.fn();

		sortOrders(null, sortFunctionMock);

		expect(sortFunctionMock).not.toBeCalled();
	});

	it('fake orders', function () {
		const cb = jest.fn();

		sortOrders(fakeOrders, cb);

		expect(cb).toBeCalled();
	});

	it('wrong sort function', function () {
		const items = ['1', '2', '3', '4', '5'];
		const itemsToBeChanged = items.slice(0);

		sortOrders(itemsToBeChanged, null);

		expect(itemsToBeChanged).toEqual(items);
	});
});

describe('getSortFunction function', () => {
	test.each([
		[null, undefined],
		[sortTypes.COUNT, sortByItemCount],
		[sortTypes.DATE, sortByDate],
	])('.getSortFunction(%i)', (type, expected) => {
		expect(getSortFunction(type)).toBe(expected);
	});
});

describe('sortByDate function', () => {
	it('dates are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});
	test.each([
		[null, null, 0],
		[{date:null}, {date:null}, 0],
		["some string", "another string", 0],
		[{date:1552481120000}, {date:1552481120001}, 1],
		[{date:1552481120001}, {date:1552481120000}, -1],
		[{date:1552481120001}, {date:1552481120001}, 0],
	])('.sortByDate(%i, %i)', (date1, date2, expected) => {
		expect(sortByDate(date1, date2)).toBe(expected);
	});
});

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

	it('items are undefined', () => {
		const result = sortByItemCount(undefined, undefined);
		expect(result).toEqual(0);
	});

});

describe('getDate function', () => {
	test.each([
		[1544356800000, '9 декабря, вс, 2018 год'],
		["some string", undefined],
	])('.getDsortOrdersate(%i)', (timestamp, expected) => {
		expect(getDate(timestamp)).toBe(expected);
	});
});

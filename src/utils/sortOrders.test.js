import React from 'react'
import {sortByItemCount, sortByDate, getSortFunction, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByItemCount(2, 3);
		expect(result).toEqual(0);
	});

	it('item in orders are null', () => {
		const order1 = {
			items: null,
		};

		const order2 = {
			items: null,
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
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

	it('order1 less than order2', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	it('order1 grater than order2', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByDate(2, 3);
		expect(result).toEqual(0);
	});

	it('date in orders are null', () => {
		const order1 = {
			date: null,
		};

		const order2 = {
			date: null,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('same date count', () => {
		const order1 = {
			date: 1,
		};

		const order2 = {
			date: 1,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 less than order2', () => {
		const order1 = {
			date: 1,
		};

		const order2 = {
			date: 2,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('order1 grater than order2', () => {
		const order1 = {
			date: 2,
		};

		const order2 = {
			date: 1,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('getSortFunction function', () => {
	it('get sortByDate', () => {
		const result = getSortFunction('date');

		expect(result).toBe(sortByDate);
	});

	it('get sortByItemCount', () => {
		const result = getSortFunction('count');

		expect(result).toBe(result);
	});

	it('invalid data', () => {
		const result = getSortFunction('hahaha');

		expect(result).toBeUndefined();
	});
});

describe('sortOrders function', () => {
	test.each([
		[null, () => {}],
		[[1, 2], null],
	])('invalid params', (orders, sortFunction) => {
		const result = sortOrders(orders, sortFunction);

		expect(result).toBeUndefined();
	});

	it('items count sort', () => {
		const orders = [
			{
				id: 123,
				date: 1544356800000,
				shop: 'Alihandro Express',
				items: [
					'Утиный пластмасса для показ новый год',
					'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
					'Новый стиль один розница яйцо для упаковки форма латекс',
				]
			},
			{
				id: 124,
				date: 1552481120000,
				shop: 'Lamodник.ru',
				items: [
					'Жакет - BOREAL5',
					'Miss Gabby Костюм',
					'Ostin перчатки мужские',
					'Zara худи роз.',
				]
			},
			{
				id: 126,
				date: 1552585550000,
				shop: 'Эльдоградо',
				items: [
					'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
					'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
				]
			},
		];

		sortOrders(orders, sortByItemCount);

		expect(orders).toEqual([
			{
				id: 126,
				date: 1552585550000,
				shop: 'Эльдоградо',
				items: [
					'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
					'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
				]
			},
			{
				id: 123,
				date: 1544356800000,
				shop: 'Alihandro Express',
				items: [
					'Утиный пластмасса для показ новый год',
					'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
					'Новый стиль один розница яйцо для упаковки форма латекс',
				]
			},
			{
				id: 124,
				date: 1552481120000,
				shop: 'Lamodник.ru',
				items: [
					'Жакет - BOREAL5',
					'Miss Gabby Костюм',
					'Ostin перчатки мужские',
					'Zara худи роз.',
				]
			},
		]);
	});

	it('date sort', () => {
		const orders = [
			{
				id: 123,
				date: 1544356800000,
				shop: 'Alihandro Express',
				items: [
					'Утиный пластмасса для показ новый год',
					'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
					'Новый стиль один розница яйцо для упаковки форма латекс',
				]
			},
			{
				id: 124,
				date: 1552481120000,
				shop: 'Lamodник.ru',
				items: [
					'Жакет - BOREAL5',
					'Miss Gabby Костюм',
					'Ostin перчатки мужские',
					'Zara худи роз.',
				]
			},
			{
				id: 126,
				date: 1552585550000,
				shop: 'Эльдоградо',
				items: [
					'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
					'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
				]
			},
		];

		sortOrders(orders, sortByDate);

		expect(orders).toEqual([
			{
				id: 126,
				date: 1552585550000,
				shop: 'Эльдоградо',
				items: [
					'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
					'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
				]
			},
			{
				id: 124,
				date: 1552481120000,
				shop: 'Lamodник.ru',
				items: [
					'Жакет - BOREAL5',
					'Miss Gabby Костюм',
					'Ostin перчатки мужские',
					'Zara худи роз.',
				]
			},
			{
				id: 123,
				date: 1544356800000,
				shop: 'Alihandro Express',
				items: [
					'Утиный пластмасса для показ новый год',
					'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
					'Новый стиль один розница яйцо для упаковки форма латекс',
				]
			},
		]);
	});
});
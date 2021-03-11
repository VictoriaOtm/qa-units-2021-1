jest.mock('../utils/getDate');

/* eslint-disable import/first */
import React from 'react'
import Order from "./Order";
import {configure, shallow, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {getDate} from "../utils/getDate";

configure({ adapter: new Adapter() });

describe('Order.js', () => {
    beforeAll(() => {
        getDate.mockReturnValue('27 11 1998')
    });

    afterAll(() => {
        getDate.mockClear();
    });

    it('should render a Order', () => {
        const order = {shop: 'shop', date: 'date'}
        const component = shallow(<Order order={order}/>);

        expect(component).toMatchSnapshot();
    });

    it('Order div counter', () => {
        const order = {
            shop: 'shop',
            date: 'date',
            "items": Array ['item'],}
        const component = render(<Order order={order}/>);

        expect(component.find('div')).toHaveLength(2);
        expect(component).toMatchSnapshot();
    });

    it('Order with empty date', () => {
        const order = {shop: 'shop', date: null};
        const component = shallow(<Order order={order}/>);

        expect(component).toEqual({});
    });

    it('Order with empty order', () => {
        const order = null;
        const component = shallow(<Order order={order}/>);

        expect(component).toEqual({});
    });

    it('Order with items', () => {
        const order = {shop: 'shop', date: 100500, items: ["some data"]}
        const component = shallow(<Order order={order}/>);

        expect(component.find('div')).toHaveLength(4);
        expect(component).toMatchSnapshot();
    });
});

import React from 'react'
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Order from './Order';
import {fakeOrders} from '../data/fakeOrders';

jest.mock('../utils/getDate');
/* eslint-disable import/first */
import {getDate} from '../utils/getDate';

configure({ adapter: new Adapter() });

describe('Order.js', () => {

  beforeEach(() => {
    getDate.mockReturnValue("хахахах это дата");
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('mock was called', () => {
    const data = {
      order: fakeOrders[0],
    };

    (new Order(data)).render();

    expect(getDate).toHaveBeenCalledTimes(1);
  });

  it('render with fakeOrders[0]', () => {
    const data = {
      order: fakeOrders[0],
    };

    const wrapper = shallow(<Order {...data}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('render with items null in data', () => {
    const data = {
      order: {
        shop: 'asa',
        date: 1,
        items: null,
      },
    };

    const result = shallow(<Order {...data}/>);

    expect(result).toMatchSnapshot();
  });

  test.each(
      [
        {order: {shop: null, date: null, }},
        {order: null}
      ]
  )('invalid data', (data) => {
    const result = (new Order(data)).render();

    expect(result).toBeNull()
  });
});


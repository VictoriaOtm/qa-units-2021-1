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
    jest.resetModules();

    getDate.mockReturnValue("хахахах это дата");
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('render with fakeOrders[0]', () => {
    const data = {
      order: fakeOrders[0],
    };

    const wrapper = shallow(<Order {...data}/>);

    expect(getDate).toHaveBeenCalledTimes(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render with null props in data', () => {
    const data = {
      order: {
        shop: null,
        date: null,
      },
    };

    const result = shallow(<Order {...data}/>);

    expect(result).toMatchSnapshot();
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

    expect(getDate).toHaveBeenCalledTimes(1);

    expect(result).toMatchSnapshot();
  });

  it('render with null props', () => {
    const data = {
      order: null,
    };

    const result = shallow(<Order {...data}/>);

    expect(result).toMatchSnapshot();
  });
});


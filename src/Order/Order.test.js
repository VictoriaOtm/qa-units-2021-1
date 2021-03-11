import React from 'react';
import { getDate } from '../utils/getDate';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Order from './Order.js';
import { fakeOrders } from '../data/fakeOrders';

configure({ adapter: new Adapter() });
jest.mock('../utils/getDate');

describe('Order.js', () => {
  beforeAll(() => {
    getDate.mockReturnValue('11 марта, чт, 2021 год');
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('default render', () => {
    expect(toJson(shallow(<Order order={fakeOrders[0]} />))).toMatchSnapshot();
  });

  it('render empty', () => {
    expect(shallow(<Order />).getElement()).toBeNull();
  });

  it('render without props', () => {
    expect(shallow(<Order order={{}} />).getElement()).toBeNull();
  });

  it('check if getDate is called', () => {
    shallow(<Order order={fakeOrders[0]} />);
    expect(getDate).toHaveBeenCalledWith(fakeOrders[0].date);
  });

  it('render without items', () => {
    expect(toJson(shallow(<Order order={
      {
        id: 124,
        date: 1552481120000,
        shop: 'shop',
      }
    } />))).toMatchSnapshot();
  });

  it('render with empty item', () => {
    expect(toJson(shallow(<Order order={
      {
        id: 124,
        date: 1552481120000,
        shop: 'shop',
        items: []
      }
    } />))).toMatchSnapshot();
  });

  it('render without id', () => {
    expect(toJson(shallow(<Order order={
      {
        date: 1544356800000,
        shop: 'shop',
        items: [
          'item',
        ]
      }
    } />))).toMatchSnapshot();
  });
});

import React from 'react'
import Order from './Order';
import { getDate } from '../utils/getDate';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {fakeOrders} from "../data/fakeOrders";

jest.mock("../utils/getDate")
configure({ adapter: new Adapter() });

describe('Order.js', () => {

  afterEach(() => {
    jest.clearAllMocks();
  })


  it('render with no items', () => {
    const wrapper = shallow(<Order/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('render with data', () => {
    const wrapper = shallow(<Order order={{shop: "shop", date: 1234}}/>);
    expect((wrapper)).toMatchSnapshot();
  });

  it('getDate call', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);
    expect(getDate).toHaveBeenCalled()
  });


  it('no date and shops', () => {
    const order = {}
    const wrapper = shallow(<Order order={order}/>);
    expect(wrapper).toMatchSnapshot();
  });


  it('no items in order', () => {
    const order = {
      date: 243,
      shop: 'shop'
    }
    const wrapper = shallow(<Order order={order}/>);
    expect(wrapper).toMatchSnapshot();
  });
});


import React from 'react'
import Order from './Order';
jest.mock("../utils/getDate")
import { getDate } from '../utils/getDate';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fakeOrders } from "../data/fakeOrders";

configure({ adapter: new Adapter() });
const fakeDate = 1234;
describe('Order.js', () => {

  beforeEach(() => {
    jest.resetModules();
    getDate.mockReturnValue(fakeDate);
  })


  it('render with no items', () => {
    const wrapper = shallow(<Order />);
    expect(wrapper.getElement()).toBeNull;
  });

  it('render with data', () => {
    const wrapper = shallow(<Order order={{ shop: "shop", date: 1234 }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('getDate call', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]} />);
    expect(getDate).toHaveBeenCalled()
  });


  it('no date and shops', () => {
    const order = {}
    const wrapper = shallow(<Order order={order} />);
    expect(wrapper.getElement()).toBeNull;
  });


  it('no items in order', () => {
    const order = {
      date: 1234,
      shop: 'shop'
    }
    const wrapper = shallow(<Order order={order} />);
    expect(wrapper).toMatchSnapshot();
  });
});


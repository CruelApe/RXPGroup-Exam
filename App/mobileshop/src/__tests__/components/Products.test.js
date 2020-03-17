import React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../../components/Products'

it('Should render products', () => {
    const wrapper = shallow(<Products />);
    const heading = wrapper.find('h3');
    const result = heading.text();

    expect(result).toBe('Available Phones');
});
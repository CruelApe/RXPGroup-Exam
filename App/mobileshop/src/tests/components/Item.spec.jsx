import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import productStore from '../../store/ProductStore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Item from '../../components/Item'

const store = createStore(productStore);
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Item', () => {
    it('Should render Item component', () => {
        const component = mount(<Provider store={store}><Item /></Provider>);
        expect(component).toMatchSnapshot();
    });
});
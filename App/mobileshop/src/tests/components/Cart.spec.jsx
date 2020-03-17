import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import productStore from '../../store/ProductStore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Cart from '../../components/Cart'

const store = createStore(productStore);
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Cart', () => {
    it('Should render Cart component', () => {
        const component = mount(<Provider store={store}><Cart /></Provider>);
        expect(component).toMatchSnapshot();
    });
});
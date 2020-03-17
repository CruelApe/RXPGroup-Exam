import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import productStore from '../../store/ProductStore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Products from '../../components/Products'

const store = createStore(productStore);
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Products', () => {
    it('Should render Products component', () => {
        const component = mount(<Provider store={store}><Products /></Provider>);
        expect(component).toMatchSnapshot();
    });
});


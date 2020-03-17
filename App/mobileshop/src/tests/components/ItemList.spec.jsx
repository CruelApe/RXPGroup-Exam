import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import productStore from '../../store/ProductStore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ItemList from '../../components/ItemList'

const store = createStore(productStore);
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('ItemList', () => {
    it('Should render ItemList component', () => {
        const component = mount(<Provider store={store}><ItemList /></Provider>);
        expect(component).toMatchSnapshot();
    });
});
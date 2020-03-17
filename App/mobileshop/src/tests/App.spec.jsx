import React from 'react';
//import Renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import productStore from '../store/ProductStore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../App';

const store = createStore(productStore);
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {

  it('Renders without crashing', () => {
    const component = mount(<Provider store={store}><App /></Provider>);
    expect(component).toMatchSnapshot();
  });

});




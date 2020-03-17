import React, { Component } from 'react';
import './styles/App.css';
import Cart from './components/Cart'
import Products from './components/Products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-section">
          <article className="App-article">
            <Products/>
          </article>
          <aside className="App-aside">
            <Cart/>
          </aside>
        </section>
      </div>
    );    
  }
}

export default App;

import React, { Component } from 'react';
import { render } from 'react-dom';
import Browse from './components/Browse';

class App extends Component {
  render() {
    return (
      <Browse />
    );
  }
}

render(<App />, document.getElementById('main'));

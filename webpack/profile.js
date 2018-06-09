import React, { Component } from 'react';
import { render } from 'react-dom';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Profile />
    )
  }
}

render(<App />, document.getElementById('main'));

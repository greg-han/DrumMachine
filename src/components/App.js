import React, { Component } from 'react';
import './App.css';
import toggle from '../reducers/reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
var { DrumMachine } = require('./DrumMachine');

let store = createStore(toggle);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <DrumMachine />
      </Provider>
    );
  }
}

export default App;

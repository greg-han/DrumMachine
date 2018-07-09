import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import toggle from '../reducers/reducers'
import DrumMachineContainer from '../containers/DrumMachineContainer';
import NavbarContainer from '../containers/NavbarContainer';

let store = createStore(toggle);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <DrumMachineContainer>
        <NavbarContainer/>
       </DrumMachineContainer>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';


const reducer = (state = 'red', action) => {
  return state
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducer, enhancer)

class App extends Component {

  render(){
    const color = 'red'

    return (
      <div style={{ backgroundColor: color, height: '100vh' }}>
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;

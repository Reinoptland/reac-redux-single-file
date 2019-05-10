import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';


const reducer = (state = 'red', action) => {
  return state
}

const store = createStore(reducer)

class App extends Component {

  render(){
    console.log(store.getState())
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

import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';
import { connect } from 'react-redux'


const reducer = (state = 'red', action) => {
  return state
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducer, enhancer)

class App extends Component {

  render(){
    const color = 'red'
    console.log(this.props.color)
    return (
      <div style={{ backgroundColor: color, height: '100vh' }}>
        <header className="App-header">

        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('STATE INSIDE STORE:', state)
  return {
    color: state
  }
}

export default connect(mapStateToProps)(App);

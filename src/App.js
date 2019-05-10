import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore } from 'redux';
import { connect } from 'react-redux'


const reducer = (state = 'blue', action) => {
  return state
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducer, enhancer)

class App extends Component {

  changeColor = () => {
    console.log('clicked!')
  }

  render(){
    return (
      <div style={{ backgroundColor: this.props.color, height: '100vh' }}>
        <header className="App-header">
          <button onClick={this.changeColor}>CHANGE EVERYTHING</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    color: state
  }
}

export default connect(mapStateToProps)(App);

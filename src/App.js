import React, { Component } from 'react';
import logo from './logo.svg';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux'

const color = (state = 'blue', action) => {
  console.log('STATE:', state, 'ACTION:', action)
  switch (action.type) {
    case "CHANGE_COLOR":
      return action.payload
  
    default:
      return state  
  }
}

const cheese = (state = 'swiss', action) => {
  console.log('STATE:', state, 'ACTION:', action)
  switch (action.type) {
  
    default:
      return state  
  }
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducer = combineReducers({
  // what you name your reducer here, will be the key in the state
  color,
  cheese
})

export const store = createStore(reducer, enhancer)

class App extends Component {

  changeColor = () => {
    const action = {
      type: 'CHANGE_COLOR',
      payload: 'yellow'
    }

    // CHECK DEVTOOLS
    this.props.dispatch(action)
  }

  render(){
    // We wrapped out component in connect, so we have access to this.props.dispatch
    console.log('DISPATCH:', this.props.dispatch)
    return (
      <div style={{ backgroundColor: this.props.color, height: '100vh' }}>
        <header className="App-header">
          <button onClick={this.changeColor}>CHANGE EVERYTHING</button>
          <br />
          { this.props.cheese }
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    color: state.color,
    cheese: state.cheese
  }
}

export default connect(mapStateToProps)(App);

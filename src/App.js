import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'

// Reducers(S) -> src/reducers/myReducer.js
// 'Root' Reducer (or all reducers combined into 1) src/reducers/index.js
// Store (creating it) src/store.js
// React component /components/App 
// Action(S) src/actions


// moved to /reducers/color.js

// moved to /reducers/cheese.js

// moved to /store.js

// moved to /reducers/index.js

// moved to /store.js

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

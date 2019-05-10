import React, { Component } from 'react';
import { connect } from 'react-redux'

// X Reducers(S) -> src/reducers/myReducer.js
// X 'Root' Reducer (or all reducers combined into 1) src/reducers/index.js
// X Store (creating it) src/store.js
// X React component /components/App 
// Action(S) src/actions


// moved to /reducers/color.js

// moved to /reducers/cheese.js

// moved to /store.js

// moved to /reducers/index.js

// moved to /store.js

class App extends Component {

  changeColor = () => {
    // Change action to ActionCreator
    const changeColor = (color) => {
      return {
        type: 'CHANGE_COLOR',
        payload: color
      }
    }


    // Dispatch the result of changeColor action creator
    // { type: 'CHANGE_COLOR', payload: 'yellow' }
    this.props.dispatch(changeColor('yellow'))
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

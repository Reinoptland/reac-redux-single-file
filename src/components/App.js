import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeColor } from '../actions/color'

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
    // moved to /actions/color.js

    // Dispatch the result of changeColor action creator
    // { type: 'CHANGE_COLOR', payload: 'yellow' }

    // BE WARNED: if you use mapDispatchToProps
    // call your action creator as this.props.myActionCreator()
    // and NOT myActionCreator() 
    this.props.changeColor('yellow')
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

// 
export default connect(mapStateToProps, { changeColor })(App);

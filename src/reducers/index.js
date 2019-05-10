import { combineReducers } from 'redux'
import color from './color'
import cheese from './cheese'

export default combineReducers({
    // what you name your reducer here, will be the key in the state
    color,
    cheese
})
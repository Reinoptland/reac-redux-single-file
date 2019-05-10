import { CHANGE_COLOR } from '../actions/color'

export default (state = 'blue', action) => {
    console.log('STATE:', state, 'ACTION:', action)
    switch (action.type) {
      case CHANGE_COLOR:
        return action.payload
    
      default:
        return state  
    }
}
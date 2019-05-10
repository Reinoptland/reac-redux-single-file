export default (state = 'swiss', action) => {
    console.log('STATE:', state, 'ACTION:', action)
    switch (action.type) {
    
      default:
        return state  
    }
}
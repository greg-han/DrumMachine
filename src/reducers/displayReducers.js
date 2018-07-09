const defaultState = "" 

const displayReducers = (state = defaultState, action) => {
  switch(action.type){
     case 'DISPLAY_ON':
        return action.name
     case 'DISPLAY_OFF':
        return "" 
     default:
        return state
  }
}

export default displayReducers

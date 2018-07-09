const toggle = (state = true, action) => {
  switch(action.type){
    case 'TOGGLE_ON':
      return true 
    case 'TOGGLE_OFF':
      return false
    default:
      return state
  }
} 


export default toggle 

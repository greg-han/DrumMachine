const TOGGLE_ON = 'TOGGLE_ON' 
const TOGGLE_OFF = 'TOGGLE_OFF'	
const EDM = 'EDM'
const HIP_HOP = 'HIP_HOP'
const DISPLAY_ON = 'DISPLAY_ON'
const DISPLAY_OFF = 'DISPLAY_OFF'

export const toggleOn = () => {
  return { type: TOGGLE_ON }

}

export const toggleOff = () => {
  return { type: TOGGLE_OFF }
}

export const edm = () => {
  return { type : EDM }
}

export const hiphop = () => {
  return { type : HIP_HOP }
}

export const displayOn = (name) => {
  return { type : DISPLAY_ON, 
           name } 
} 

export const displayOff = () => {
  return { type : DISPLAY_OFF }
} 

//this should be called with the pad object as an argument
//it will then return the pad to the reducer 
//Don't even need to call a pad here, you can instead use toggle as a means of either filling the  components with pads or not.

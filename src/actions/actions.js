import React from 'react';
import ReactDOM from 'react-dom';

const TOGGLE_ON = 'TOGGLE_ON' 
const TOGGLE_OFF = 'TOGGLE_OFF'	

export const toggleOn = () => {
  return { type: TOGGLE_ON }

}

export const toggleOff = () => {
  return { type: TOGGLE_OFF }
}


//this should be called with the pad object as an argument
//it will then return the pad to the reducer 
//Don't even need to call a pad here, you can instead use toggle as a means of either filling the  components with pads or not.

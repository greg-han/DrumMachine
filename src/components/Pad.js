import React, { Component } from 'react';

const padStyle = {
  float: 'left',
  border: '1px solid black',
  position: 'relative',
  width: '140px',
  height: '140px',
  marginLeft: '3px',
  marginRight: '3px',
  marginTop: '3px',
  marginBottom: '3px',
  borderRadius: '5px'
}

class Pad extends Component {
  constructor(props){
    super(props);
  this.soundOff = this.soundOff.bind(this);
  }
  soundOff(event){
   const sound = document.getElementById(this.props.keyTrigger);
   sound.currentTime = 0;
   sound.play();
  } 
  render() { 
    return ( 
      <div class="drum-pad" style={padStyle}>
      </div>    
   )
  }
}

export default Pad

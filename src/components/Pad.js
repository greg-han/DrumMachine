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
   console.log("I'm clicked");
   const sound = document.getElementById(this.props.keyTrigger);
   sound.play();
  } 
  render() { 
    return ( 
      <div id={this.props.clipId} className="drum-pad" style={padStyle} onClick={this.soundOff}>
        <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
      {this.props.keyTrigger}
      </div>    
   )
  }
}

export default Pad

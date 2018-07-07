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
  borderRadius: '5px',
  textAlign: 'center'
}

class Pad extends Component {
  constructor(props){
    super(props);
  this.soundOff = this.soundOff.bind(this);
  this.keySound = this.keySound.bind(this);
  }
  componentDidMount() {
   document.addEventListener("keydown",this.keySound);
  }
  componentWillUnmount() {
   document.removeEventListener("keydown",this.keySound);
  }
  keySound(event){
   console.log(event.key);
   const sound = document.getElementById(String(event.key).toUpperCase());
   if(sound){
     sound.play();
    }  
  }
  soundOff(event){
   console.log("I'm clicked",event);
   const sound = document.getElementById(this.props.keyTrigger);
   sound.play();
  } 
  render() { 
    return ( 
      <div id={this.props.clipId} className="drum-pad" style={padStyle} onClick={this.soundOff} onKeyDown={this.keySound} >
        <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
      {this.props.keyTrigger}
      </div>    
   )
  }
}

export default Pad

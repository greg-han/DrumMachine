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
}

const padText = {
  position: 'relative',
  marginLeft: '5px',
  marginTop: '5px',
}

class Pad extends Component {
  constructor(props){
    super(props);
  this.soundOff = this.soundOff.bind(this);
  this.keySound = this.keySound.bind(this);
  this.changeDisplay = this.changeDisplay.bind(this);
  }
  componentDidMount() {
   document.addEventListener("keydown",this.keySound);
  }
  componentWillUnmount() {
   document.removeEventListener("keydown",this.keySound);
  }
  keySound(event){
   const sound = document.getElementById(String(event.key).toUpperCase());
   console.log("sound",sound);
   if(sound){
     this.changeDisplay(sound.getAttribute("soundName").replace(/-/g,' '));
     sound.play();
    }  
  }
  soundOff(event){
   const sound = document.getElementById(this.props.keyTrigger);
   sound.play();
  } 
  changeDisplay(name){
    this.props.displayOn(name.replace(/-/g,' '))
  }
  render() { 
    if(!this.props.power){
    this.props.displayOff() 
    }
    return ( 
      <div id={this.props.clipId} className="drum-pad" style={padStyle} onClick={() => {this.soundOff(); this.changeDisplay(this.props.clipId)}} onKeyDown={this.keySound} >
        <audio className='clip' id={this.props.keyTrigger} src={this.props.clip} soundName={this.props.clipId}  ></audio>
      <div style={padText}>
      {this.props.keyTrigger}
      </div>
      </div>    
   )
  }
}

export default Pad

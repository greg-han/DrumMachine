import React, { Component } from 'react';
import Pad from './Pad';
import Navbar from './Navbar';

let pads = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];


const drummachinestyle = {
 margin: '30px auto 0',
 width: '444px',
 height: '487px',
 position: 'absolute',
 top: '50%',
 left:'50%',
 transform: 'translate(-50%,-50%)'
}

class DrumMachine extends Component { 
    constructor(props){
      super(props);
    }
    render(){
      let drumpads;
      console.log("props",this.props);
      (this.props.power) ?
        drumpads = pads.map((drum,i,drumpads) => {
          return(
            <Pad 
              clipId={drumpads[i].id}
              clip={drumpads[i].url}
              keyTrigger={drumpads[i].keyTrigger}
              keyCode={drumpads[i].keyCode}
              power={this.props.power}
            />
         )
        }) :
         drumpads = pads.map((drum,i,drumpads) => {
         return(
          <Pad
            clipId={drumpads[i].id}
            clip='#'
            keyTrigger={drumpads[i].keyTrigger}
            keyCode={drumpads[i].keyCode}
            power={this.props.power}
          />
        )
     })
      return(
        <div id="drum-machine" style={drummachinestyle}>
          <Navbar power={this.props.power} toggleOff={this.props.toggleOff} toggleOn={this.props.toggleOn} />
         {drumpads}
        </div>
      ) 
    }
}

export default DrumMachine 

import React, { Component } from 'react';
import Pad from './Pad';
import Navbar from './Navbar';

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
      (this.props.power) ?
        drumpads = this.props.padbank.bank.map((drum,i,drumpads) => {
          return(
            <Pad 
              clipId={drumpads[i].id}
              clip={drumpads[i].url}
              keyTrigger={drumpads[i].keyTrigger}
              keyCode={drumpads[i].keyCode}
              displayOn={this.props.displayOn}
              displayOff={this.props.displayOff}
              power={this.props.power}
            />
         )
        }) :
         drumpads = this.props.padbank.bank.map((drum,i,drumpads) => {
         return(
          <Pad
            clipId={""}
            clip='#'
            keyTrigger={drumpads[i].keyTrigger}
            keyCode={drumpads[i].keyCode}
            displayOn={this.props.displayOn}
            displayOff={this.props.displayOff}
            power={this.props.power}
          />
        )
     })
      return(
        <div id="drum-machine" style={drummachinestyle}>
          <Navbar power={this.props.power} toggleOff={this.props.toggleOff} toggleOn={this.props.toggleOn} display={this.props.display} switch={this.props.padbank.switch} hiphop={this.props.hiphop} edm={this.props.edm}/>
         {drumpads}
        </div>
      ) 
    }
}

export default DrumMachine 

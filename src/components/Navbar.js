import React, { Component } from 'react';
import Switch from "react-switch";

const navbar = {
  width:  '439px',
  height: '40px',
  border: '1px solid black',
  borderRadius: '11px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '3px',
}

const navText = {
  marginLeft: '15px',
  lineHeight: '40px',
}

const toggleStyle= {
  marginLeft: '55%',
  position: 'absolute',
  paddingTop: '5px',
}



class Navbar extends Component {
  constructor(props){
   super(props);
  }
   toggleSwitch = () => {
     (this.props.power) ? this.props.toggleOff() : this.props.toggleOn()
  };
  render(){  
    return(
      <div style={navbar}>
      <span style={navText}>Drum Machine
       <span style={toggleStyle}>
       <Switch 
        checked={this.props.power}
        onChange={this.toggleSwitch}  
        onHandleColor="#666666"
        offHandleColor="#666666"
        onColor="#cccccc"
        offColor="#cccccc"
        activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0)"
        id="normal-switch"
        uncheckedIcon={
         <svg viewBox="0 0 10 10" height="100%" width="100%" fill="red">
            <circle r={3} cx={5} cy={5} />
          </svg>

        }
        checkedIcon={
          <svg viewBox="0 0 10 10" height="100%" width="100%" fill="green">
            <circle r={3} cx={5} cy={5} />
          </svg>
        }
      />
       </span>
      </span>
      </div>
   ) 
 }
}

export default Navbar

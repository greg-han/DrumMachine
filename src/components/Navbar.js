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

const onoffToggleStyle= {
  marginLeft: '25%',
  position: 'absolute',
  paddingTop: '6px',
}
const padBankToggleStyle= {
  marginLeft: '41%',
  position: 'absolute',
  paddingTop: '6px',
}

const displayStyle = {
  width: "58px",
  height: "28px",
  borderRadius: "3px",
  border: "1px solid black", 
  position: 'absolute', 
  marginLeft : '57%',
  marginTop: '5px',
  lineHeight: '28px',
  textAlign: 'center',
  overflow: 'auto',
  fontSize: '10px',
} 

class Navbar extends Component {
  constructor(props){
   super(props);
  }
   toggleSwitch = () => {
     (this.props.power) ? this.props.toggleOff() : this.props.toggleOn()
  };
   switchBank = () => {
    (this.props.switch) ? this.props.hiphop() : this.props.edm()
  };
  render(){  
    return(
      <div style={navbar}>
      <span style={navText}>Drum Machine
       <span style={onoffToggleStyle}>
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
            <circle r={4} cx={5} cy={5} />
          </svg>

        }
        checkedIcon={
          <svg viewBox="0 0 10 10" height="100%" width="100%" fill="green">
            <circle r={4} cx={5} cy={5}/>
          </svg>
        }
      /></span>
       <span style={padBankToggleStyle}>
       <Switch 
        checked={this.props.switch}
        onChange={this.switchBank}  
        onHandleColor="#666666"
        offHandleColor="#666666"
        onColor="#cccccc"
        offColor="#cccccc"
        activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0)"
        id="normal-switch"
        uncheckedIcon={
         <svg viewBox="0 0 10 10" height="100%" width="100%" fill="#1b2663">
         <rect x={0} y={0} rx={2} ry={2} width={10} height={10} />
         </svg>
        }
        checkedIcon={
         <svg viewBox="0 0 10 10" height="100%" width="100%" fill="#41f4d9">
         <rect x={0} y={0} rx={2} ry={2} width={10} height={10} />
         </svg>
        } />
      </span>
      <span style={displayStyle} id="display">{this.props.display}</span>
      </span>
      </div>
   ) 
 }
}

export default Navbar

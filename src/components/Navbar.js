import React, { Component } from 'react';
import Pad from './Pad';
import NavbarContainer from '../containers/NavbarContainer'

const navbar = {
  width:  '440px',
  height: '40px',
  border: '1px solid black',
  borderRadius: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '3px',
}


class Navbar extends Component {
   constructor(props){
     super(props);
   }
   toggleSwitch = () => {
     (this.props.toggle) ? this.props.toggleOff : this.props.toggleOn;
  };
  render(){  
    return(
      <div style={navbar} power={this.props.toggle} onChange={this.toggleSwitch}>
      </div>
   ) 
 }
}

module.exports = Navbar;

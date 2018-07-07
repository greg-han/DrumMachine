import React from 'react';
import { connect } from 'react-redux';
import  DrumMachine from '../components/DrumMachine';
import toggle from  '../reducers/reducers';


const mapStateToProps = (state) => {
 return {
   toggle : state 
  } 
};


const DrumMachineContainer = connect(mapStateToProps,null)(DrumMachine)

export default DrumMachineContainer;

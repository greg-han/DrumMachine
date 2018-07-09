import { connect } from 'react-redux';
import  DrumMachine from '../components/DrumMachine';
import { toggleOff } from '../actions/actions';
import { toggleOn } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { displayOn } from '../actions/actions';
import { displayOff } from '../actions/actions';
import { hiphop } from '../actions/actions';
import { edm } from '../actions/actions';

const mapStateToProps = (state) => {
 return {
   power : state.toggleReducers,
   padbank : state.padBankReducers,
   display : state.displayReducers
  } 
};

const mapDispatchToProps = (dispatch) => {
  return {
      ...bindActionCreators({ toggleOn, toggleOff, displayOn, displayOff,hiphop,edm }, dispatch)
  }
}

const DrumMachineContainer = connect(mapStateToProps,mapDispatchToProps)(DrumMachine)

export default DrumMachineContainer;

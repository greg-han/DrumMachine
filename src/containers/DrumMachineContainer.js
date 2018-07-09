import { connect } from 'react-redux';
import  DrumMachine from '../components/DrumMachine';
import { toggleOff } from '../actions/actions'
import { toggleOn } from '../actions/actions'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
 return {
   power : state 
  } 
};

const mapDispatchToProps = (dispatch) => {
  return {
      ...bindActionCreators({ toggleOn, toggleOff }, dispatch)
  }
}

const DrumMachineContainer = connect(mapStateToProps,mapDispatchToProps)(DrumMachine)

export default DrumMachineContainer;

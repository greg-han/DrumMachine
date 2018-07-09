import { connect } from 'react-redux';
import { toggleOn } from '../actions/actions'; 
import { toggleOff } from '../actions/actions';
import { bindActionCreators } from 'redux';
import Navbar from '../components/Navbar'

const mapDispatchToProps = dispatch => ({
   toggleOff : () => dispatch(toggleOff())
})

const NavbarContainer = connect(null,mapDispatchToProps)(Navbar)

export default NavbarContainer

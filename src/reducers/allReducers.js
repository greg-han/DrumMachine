import { combineReducers } from 'redux'
import toggleReducers from './toggleReducers'
import padBankReducers from './padBankReducers'
import displayReducers from './displayReducers'

const allReducers = combineReducers({
   toggleReducers,
   displayReducers,
   padBankReducers
 })

export default allReducers

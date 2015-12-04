import { combineReducers } from 'redux'
import counter from './counter'
import contact_form from './contact_form'

const rootReducer = combineReducers({ counter })
export default rootReducer

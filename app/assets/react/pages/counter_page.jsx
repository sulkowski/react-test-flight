import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/counter'
import * as CounterActions from '../actions/counter'

let mapStateToProps    = (state) => { return { counter: state.counter }; }
let mapDispatchToProps = (dispatch) => bindActionCreators(CounterActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Counter)


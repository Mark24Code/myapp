import { combineReducers } from 'redux'
import counter_reducer from './counter';

const reducer = combineReducers({
  count:counter_reducer
})

export default reducer

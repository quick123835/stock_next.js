import { combineReducers } from 'redux'
import SearchReducer from './SearchReducer'
import stocksReducer from './stocksReducer'
import stockInfoReducer from './stockInfoReducer'

const allReducers = combineReducers({
  SearchReducer,
  stocksReducer,
  stockInfoReducer
})

export default allReducers

import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import { reducer as formReducer } from 'redux-form'
import counter from './counter'
import generalRefer from './generalRefer'

export default combineReducers({
  generalRefer,
  counter,
  router: routeReducer,
  form: formReducer
})

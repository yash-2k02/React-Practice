// install redux, react-redux

import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import { counterReducer } from './components/counter/redux/CounterReducer'
import { createLogger } from 'redux-logger';

const logger = createLogger()

const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))




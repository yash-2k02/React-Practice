// install react-redux, @reduxjs/toolkit

import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from './components/counter/redux/CounterReducer';

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
});

store.subscribe(() => console.log(store.getState()));

// store.dispatch(add());
// store.dispatch(subtract());



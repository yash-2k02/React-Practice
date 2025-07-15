// practiced combine reducers
// npm i redux
// npm i redux-saga

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga.js";


const sagaMiddleware = createSagaMiddleware()
export const FETCH_REQUEST = "Send fetch request";
const FETCH_SUCCESS = "Fetch Success";
const FETCH_ERROR = "Fetch error";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const API_ENDPOINT = "https://dummyjson.com/products?limit=10";


export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};


export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data.products,
  };
};

export const fetchError = (err) => {
  return {
    type: FETCH_ERROR,
    error: err,
  };
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading:false,
        data: action.payload.map((product)=> ({id:product.id, title:product.title})),
      };
    case FETCH_ERROR:
      return {
        ...state,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};



const store = createStore(fetchReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
store.subscribe(() => console.log(store.getState()));


// fetchData()

store.dispatch(fetchRequest());

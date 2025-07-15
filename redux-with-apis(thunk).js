// practiced combine reducers
// npm i redux
// npm i redux-thunk

import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import {thunk} from "redux-thunk";

const FETCH_REQUEST = "Send fetch request";
const FETCH_SUCCESS = "Fetch Success";
const FETCH_ERROR = "Fetch error";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const API_ENDPOINT = "https://dummyjson.com/products?limit=10";


// const fetchData = () => {
//   return (dispatch) => {
//     dispatch(fetchRequest());
//     axios
//       .get(API_ENDPOINT)
//       .then((res) => dispatch(fetchSuccess(res.data)))
//       .catch((error) => dispatch(fetchError(error.message)));
//   };
// };


const fetchData = ()=>{

    store.dispatch(fetchRequest())
    
     axios.get(API_ENDPOINT)
    .then((res) => store.dispatch(fetchSuccess(res.data)))
    .catch((error) => store.dispatch(fetchError(error.message)));

}

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data.products,
  };
};

const fetchError = (err) => {
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

const store = createStore(fetchReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));



// store.dispatch(fetchData());

fetchData()
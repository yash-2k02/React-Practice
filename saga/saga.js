import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { API_ENDPOINT, FETCH_REQUEST, fetchError, fetchSuccess } from './redux-with-apis(saga).js';
import axios from 'axios';



// thunk way
// const fetchData = () => {
//   return (dispatch) => {
//     dispatch(fetchRequest());
//     axios
//       .get(API_ENDPOINT)
//       .then((res) => dispatch(fetchSuccess(res.data)))
//       .catch((error) => dispatch(fetchError(error.message)));
//   };
// };


// normal way
// const fetchData = ()=>{

//     store.dispatch(fetchRequest())
    
//      axios.get(API_ENDPOINT)
//     .then((res) => store.dispatch(fetchSuccess(res.data)))
//     .catch((error) => store.dispatch(fetchError(error.message)));

// }


// saga way
const fetchDataApi = () =>{
   return axios.get(API_ENDPOINT)
    .then((res) => res.data)
    .catch((error) => error.message);
}


function* fetchData(){
    try{
        const data = yield call(fetchDataApi);
        yield put(fetchSuccess(data))
    }catch(error){
        yield put(fetchError(error.message))
    }
}

function* rootSaga() {
  yield takeEvery(FETCH_REQUEST, fetchData);
}

export default rootSaga;
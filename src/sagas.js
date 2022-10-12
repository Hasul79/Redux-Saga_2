import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions';


function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());   
}



//2.
 function* workGetUsersFetch() {
    const users = yield call(usersFetch);
     yield put({
        type: GET_USERS_SUCCESS, users
    })
 }
 
 //1.
 function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
  }
  console.log(mySaga)
  export default mySaga;
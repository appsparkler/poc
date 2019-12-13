import {put, takeEvery, all} from 'redux-saga/effects'

function* helloSaga() {
  console.log('hello Sagas!')
}

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put({type: 'INCREMENT'})
}

function* watchIncrementAsync()  {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* decrementAsync() {
  yield delay(1000);
  yield put({type: 'DECREMENT'})
}

export function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync()
  ])
}

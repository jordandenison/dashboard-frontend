import { all, fork } from 'redux-saga/effects'
import watchAuth from 'redux/sagas/auth'
import watchRealtime from 'redux/sagas/realtime'

export default function * rootSaga () {
  yield all([
    fork(watchAuth),
    fork(watchRealtime)
  ])
}

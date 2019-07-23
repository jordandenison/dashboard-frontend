import { all, fork } from 'redux-saga/effects'
import watchRealtime from 'redux/sagas/realtime'

export default function * rootSaga () {
  yield all([
    fork(watchRealtime)
  ])
}

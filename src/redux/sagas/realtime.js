import { all, takeLatest } from 'redux-saga/effects'

// eslint-disable-next-line
function * init () {
  console.log('init')
}

export default function * watchRealtime () {
  yield all([
    takeLatest('LOGIN_SUCCESS', init)
  ])
}

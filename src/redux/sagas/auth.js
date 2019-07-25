import { all, put, takeLatest } from 'redux-saga/effects'

import feathersauthentication from 'lib/feathers/feathersAuthentication'

const removeJwtFromLocalStorage = () => {
  if (window.localStorage && window.localStorage.removeItem) {
    window.localStorage.removeItem('feathers-jwt')
  }
}

function loginSuccess ({ queryStringAccessToken }) {
  if (queryStringAccessToken) {
    window.history.replaceState(null, null, window.location.pathname)
  }
}

function logout () {
  removeJwtFromLocalStorage()
  put(feathersauthentication.logout())

  window.location.reload()
}

export default function * watchAuth () {
  yield all([
    takeLatest('LOGIN_SUCCESS', loginSuccess),
    takeLatest('LOGOUT', logout)
  ])
}

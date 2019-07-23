import { combineReducers } from 'redux'

import services from 'lib/feathers/feathersServices'
import currentUser from 'redux/reducers/currentUser'

const reducers = {
  currentUser,
  accounts: services.accounts.reducer,
  users: services.users.reducer
}

export default combineReducers(reducers)

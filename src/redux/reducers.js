import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import services from 'lib/feathers/feathersServices'
import currentUser from 'redux/reducers/currentUser'

const reducers = {
  currentUser,
  accounts: services.accounts.reducer,
  users: services.users.reducer
}

export default history => combineReducers({
  router: connectRouter(history),
  ...reducers
})

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import services from 'lib/feathers/feathersServices'
import currentUser from 'redux/reducers/currentUser'
import page from 'redux/reducers/page'
import sort from 'redux/reducers/sort'
import search from 'redux/reducers/search'

const reducers = {
  currentUser,
  page,
  sort,
  search,
  accounts: services.accounts.reducer,
  users: services.users.reducer
}

export default history => combineReducers({
  router: connectRouter(history),
  ...reducers
})

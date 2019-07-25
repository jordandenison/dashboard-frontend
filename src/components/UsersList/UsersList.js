import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import UsersListView from './UsersListView'

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  users: state.users.queryResult ? state.users.queryResult.data : [],
  page: state.page.users,
  search: state.search.users,
  sort: state.sort.users,
  queryResult: { users: state.users.queryResult || { total: 0, limit: 0 } },
  loaded: state.users.isFinished
})

const mapDispatchToProps = dispatch => {
  return {
    routeTo: path => dispatch(push(path)),
    removeUser: id => alert('Coming soon!'), // eslint-disable-line
    setPage: page => dispatch({ type: 'SET_PAGE', model: 'users', page }),
    setSort: sort => dispatch({ type: 'SET_SORT', model: 'users', sort }),
    setSearch: search => dispatch({ type: 'SET_SEARCH', model: 'users', search })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListView)

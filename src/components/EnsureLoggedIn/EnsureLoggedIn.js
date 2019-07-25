import React from 'react'
import { connect } from 'react-redux'

import Login from 'components/Login'

const EnsureLoggedIn = ({ isLoggedIn, cu, children }) =>
  isLoggedIn ? <div>{children}</div> : <Login />

const mapStateToProps = state => {
  return {
    isLoggedIn: state.currentUser.id,
    cu: state.currentUser
  }
}

export default connect(mapStateToProps)(EnsureLoggedIn)

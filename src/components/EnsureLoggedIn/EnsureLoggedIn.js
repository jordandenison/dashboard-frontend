import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Login from 'components/Login'

const EnsureLoggedIn = ({ isLoggedIn, children }) =>
  isLoggedIn ? <div>{children}</div> : <Login />

EnsureLoggedIn.propTypes = {
  isLoggedIn: PropTypes.string,
  children: PropTypes.node
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.currentUser.id
  }
}

export default connect(mapStateToProps)(EnsureLoggedIn)

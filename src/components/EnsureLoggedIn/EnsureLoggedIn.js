import React from 'react'
import { connect } from 'react-redux'

const EnsureLoggedIn = ({ isLoggedIn, children }) =>
  isLoggedIn ? <div>{children}</div> : <div />

const mapStateToProps = state => {
  return {
    isLoggedIn: state.currentUser.id
  }
}

export default connect(mapStateToProps)(EnsureLoggedIn)

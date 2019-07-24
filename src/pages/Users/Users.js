import { connect } from 'react-redux'
import UsersView from './UsersView'

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(UsersView)

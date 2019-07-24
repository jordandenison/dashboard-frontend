import { connect } from 'react-redux'
import HomeView from './HomeView'

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(HomeView)

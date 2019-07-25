import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import './Sidebar.css'

const homeRegexp = /^\/$/
const usersRegexp = /^\/users/

const SidebarView = ({ router, routeTo }) => (
  <Menu vertical className='sidebarComponent' fixed='left'>
    <Menu.Item active={homeRegexp.test(router.location.pathname)} onClick={() => routeTo('/')}>
      Home
      <Icon name='newspaper outline' />
    </Menu.Item>
    <Menu.Item active={usersRegexp.test(router.location.pathname)} onClick={() => routeTo('/users')}>
      Users
      <Icon name='user' />
    </Menu.Item>
  </Menu>
)

SidebarView.propTypes = {
  router: PropTypes.object,
  routeTo: PropTypes.func
}

export default SidebarView

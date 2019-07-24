import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import './Sidebar.css'

const homeRegexp = /^\/$/
const usersRegexp = /^\/users/

const SidebarView = ({ routeTo, router }) => (
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

export default SidebarView

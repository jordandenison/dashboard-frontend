import React from 'react'
import { Dropdown, Divider, Header, Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import './Header.css'

const HeaderView = ({ currentUser, logout, routeTo }) => (
  <Menu className='headerComponent' fixed='top'>
    <Header as='h1' textAlign='center' className='menuHeader'>Dashboard Demo</Header>
    <Menu.Menu position='right'>
      <Dropdown name='settings' pointing trigger={<span>{ currentUser.email }</span>} style={{ padding: '12px' }}>
        <Dropdown.Menu className='headerDropdownMenu'>
          <Dropdown.Item key='profile' onClick={() => routeTo('/profile')}>Profile</Dropdown.Item>
          <Dropdown.Item key='settings' onClick={() => routeTo('/settings')}>Settings</Dropdown.Item>
          <Divider />
          <Dropdown.Item key='logout' onClick={logout}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
)

HeaderView.propTypes = {
  currentUser: PropTypes.shape({ email: PropTypes.string }),
  logout: PropTypes.function,
  routeTo: PropTypes.function
}

export default HeaderView

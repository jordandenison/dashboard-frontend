import React from 'react'
import { Dropdown, Divider, Header, Menu } from 'semantic-ui-react'

import './Header.css'

const HeaderView = ({ currentUser, routeTo, logout }) => (
  <Menu className='headerComponent' fixed='top'>
    <Header as='h1' textAlign='center' className='menuHeader'>Dashboard Demo</Header>
    <Menu.Menu position='right'>
      <Menu.Item>{ currentUser.email }</Menu.Item>
      <Dropdown name='settings' pointing labeled icon='align justify' size='large' >
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

export default HeaderView

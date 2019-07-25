import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Input, Pagination, Table } from 'semantic-ui-react'

import './UsersList.css'

const UsersListView = ({ loaded, users, setPage, setSort, setSearch, page, search, sort, routeTo, removeUser, queryResult }) => {
  const userHeaders = [
    { name: 'Email Addresses', sortOption: 'email' },
    { name: 'Role', sortOption: 'role' },
    { name: 'Actions' }
  ]

  return (
    <div className='usersComponent'>
      <div>
        <Input key='usersComponentSearch' loading={!loaded} icon='search' placeholder='Search...' onChange={(e, { value }) => { setSearch(value) }} value={search} />
        <Button floated='right' onClick={() => routeTo('/users/create')}>Add User</Button>
      </div>
      <br />
      { !loaded ? <div className='usersComponent'>
        Loading users...
      </div>
        : <Table unstackable>
          <Table.Header>
            <Table.Row>
              { userHeaders.map((userHeader, i) => (
                <Table.HeaderCell key={`${userHeader.name}${i}`}>
                  {userHeader.name}
                  { userHeader.name !== 'Actions' ? <React.Fragment>
                    <Icon name='sort up' onClick={() => setSort({ [userHeader.sortOption]: 1 })} className='tableIcon' size='large' style={{ position: 'relative', left: '10px', bottom: '2px' }} />
                    <Icon name='sort down' onClick={() => setSort({ [userHeader.sortOption]: -1 })} className='tableIcon' size='large' style={{ position: 'relative', right: '18px', top: '2px' }} />
                  </React.Fragment> : false }
                </Table.HeaderCell>
              )) }
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users
              .map(user => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell style={{ textTransform: 'capitalize' }}>{user.role}</Table.Cell>
                  <Table.Cell>{users.length > 1 && <Button onClick={() => removeUser(user.id)}>Remove</Button>}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>

          { queryResult.users.total > 10 ? <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={userHeaders.length}>
                <Pagination
                  activePage={page + 1}
                  totalPages={
                    queryResult.users
                      ? Math.floor(
                        queryResult.users.total /
                          queryResult.users.limit
                      ) + 1
                      : 1
                  }
                  onPageChange={(e, { activePage }) => setPage(activePage - 1)}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer> : false }
        </Table> }
    </div>
  )
}

UsersListView.propTypes = {
  loaded: PropTypes.bool,
  users: PropTypes.array,
  setPage: PropTypes.func,
  setSort: PropTypes.func,
  setSearch: PropTypes.func,
  page: PropTypes.number,
  search: PropTypes.string,
  sort: PropTypes.object,
  routeTo: PropTypes.func,
  removeUser: PropTypes.func,
  queryResult: PropTypes.object
}

export default UsersListView

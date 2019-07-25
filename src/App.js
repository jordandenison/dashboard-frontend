import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import { Container } from 'semantic-ui-react'
import store, { history } from 'redux/store'

import './App.css'

import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import EnsureLoggedIn from 'components/EnsureLoggedIn'

import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Container fluid>
        <EnsureLoggedIn>
          <Header />
          <Sidebar />
          <div className='contentContainer'>
            <Routes />
          </div>
        </EnsureLoggedIn>
      </Container>
    </ConnectedRouter>
  </Provider>
)

export default App

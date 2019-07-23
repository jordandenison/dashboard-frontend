import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'

import './App.css'
import store from 'redux/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Container className='content'>
          <Header as='h1' textAlign='center'>Dashboard</Header>
        </Container>
      </Provider>
    )
  }
}

export default App

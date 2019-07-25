import React from 'react'
import { Divider, Grid, Header, Segment } from 'semantic-ui-react'
import { url } from 'lib/feathers/feathersClient'

const LoginView = () => (
  <Grid centered>
    <Grid.Column style={{ maxWidth: '400px', marginTop: '200px' }}>
      <Header textAlign='center'>Dashboard Demo Login</Header>
      <Divider />
      <Segment size='large' textAlign='center'>
        <Header><a href={`${url}/auth/google`}>Login With Google</a></Header>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default LoginView

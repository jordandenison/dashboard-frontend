import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import { url } from 'lib/feathers/feathersClient'

const LoginView = () => (
  <Grid textAlign='center'>
    <Grid.Column>
      <Segment size='large' textAlign='center'>
        <Header><a href={`${url}/auth/google`}>Login With Google</a></Header>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default LoginView

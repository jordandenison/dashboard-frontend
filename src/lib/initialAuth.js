import feathersAuthentication from 'lib/feathers/feathersAuthentication'

const init = async store => {
  const authenticationOptions = {
    strategy: 'local',
    email: `test${window.location.hostname === 'boilerplate-development.com' ? '2' : ''}@test.com`,
    password: 'test'
  }

  console.log('logging in user ', authenticationOptions.email)

  try {
    const results = await store.dispatch(feathersAuthentication.authenticate(authenticationOptions))

    const action = {
      type: 'LOGIN_SUCCESS',
      user: results.value.user,
      accessToken: results.value.accessToken
    }

    store.dispatch(action)
  } catch (e) {
    console.log(`Token login error: ${e.message}`)
  }
}

export default init

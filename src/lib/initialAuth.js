import feathersAuthentication from 'lib/feathers/feathersAuthentication'

const urlParams = new URLSearchParams(window.location.search)
const queryStringAccessToken = urlParams.get('accessToken')

const accessToken = queryStringAccessToken || (window.localStorage && window.localStorage.getItem && window.localStorage.getItem('feathers-jwt'))

const processLogin = async store => {
  if (!accessToken) { return }

  const authenticationOptions = {
    strategy: 'jwt',
    accessToken
  }

  try {
    const results = await store.dispatch(feathersAuthentication.authenticate(authenticationOptions))

    const action = {
      type: 'LOGIN_SUCCESS',
      user: results.value.user,
      accessToken: results.value.accessToken,
      queryStringAccessToken
    }

    store.dispatch(action)
  } catch (e) {
    console.log(`Token login error: ${e.message}`)
  }
}

const init = async store => {
  return processLogin(store, accessToken)
}

export default init

import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

const port = window.location.hostname === 'dashboard-api.denisonweb.com' ? 443 : 3001

export const url = `${window.location.hostname}:${port}`

export const socket = io(url, {
  transports: ['websocket']
})

const feathersClient = feathers()
  .configure(socketio(socket, { timeout: 10000 }))
  .configure(auth({ storage: window.localStorage }))

export default feathersClient

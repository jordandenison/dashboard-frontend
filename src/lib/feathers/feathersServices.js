import reduxifyServices from 'feathers-redux'
import feathersClient from './feathersClient'

const services = ['users', 'accounts']

export default reduxifyServices(feathersClient, services)

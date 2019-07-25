import { all, select, takeLatest } from 'redux-saga/effects'
import store from 'redux/store'

import services from 'lib/feathers/feathersServices'

function * fetch ({ model }) {
  const { page, sort, search } = yield select()
  console.log('page ', page)

  const $sort = sort[model]
  const $skip = page[model] * 10

  const query = { $sort, $skip }

  if (search[model]) { query.search = search[model] }

  const { value } = yield store.dispatch(services[model].find({ query }))

  if (!value.data[0] && value.total && $skip > 0) {
    const firstPageQuery = Object.assign({}, query, { $skip: 0 })
    yield store.dispatch(services[model].find({ query: firstPageQuery }))
  }
}

function * fetchOnRouteChange () {
  const state = yield select()
  const model = state.router.location.pathname.split('/')[1]

  if (model) {
    yield fetch({ model })
  }
}

export default function * watchAuth () {
  yield all([
    takeLatest('LOGIN_SUCCESS', fetchOnRouteChange),
    takeLatest('@@router/LOCATION_CHANGE', fetchOnRouteChange),
    takeLatest('SET_PAGE', fetch),
    takeLatest('SET_SORT', fetch),
    takeLatest('SET_SEARCH', fetch)
  ])
}

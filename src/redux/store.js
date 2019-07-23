import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'redux/sagas'
import reducer from './reducer'

import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(thunk, promiseMiddleware, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store

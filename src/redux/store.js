import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'redux/sagas'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { createBrowserHistory } from 'history'

import createRootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      promiseMiddleware,
      routerMiddleware(history),
      sagaMiddleware,
      thunk
    )
  )
)

sagaMiddleware.run(rootSaga)

export default store

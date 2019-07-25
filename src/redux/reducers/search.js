export default (state = {
  users: ''
}, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return Object.assign({}, state, { [action.model]: action.search })
    default:
      return state
  }
}

import update from 'immutability-helper'

const reducer = (state={ route: '' }, action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return { route: action.route }
    default:
      return state
  }
}

export default reducer

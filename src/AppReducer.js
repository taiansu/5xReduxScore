import {combineReducers} from 'redux'

function score(state = [{id: 1, name: 'ruby', score: 0}], action) {
  switch (action.type) {
    case 'TALLY':
      return state.map(item => {
        if (item.name == action.lang) {
          return Object.assign({}, item, {score: item.score + 1})
        } else {
          return item
        }
      })
    default:
      return state;
  }
}

var AppReducer = combineReducers({
  score,
})

export default AppReducer

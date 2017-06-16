import {combineReducers} from 'redux'
import v4 from 'uuid/v4'

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
    case 'ADD_LANG':
      return [...state, {id: v4(), name: action.name, score: 0}]
    default:
      return state;
  }
}

var AppReducer = combineReducers({
  score,
})

export default AppReducer

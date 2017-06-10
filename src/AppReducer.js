import {combineReducers} from 'redux'

function score(state = [{id: 1, name: 'ruby', score: 0}], action) {
  switch (action.type) {
    case 'TALLY':
      var index = state.findIndex(({name})=> name == action.lang)
      state[index].score += 1
      return state
    default:
      return state;
  }
}

var AppReducer = combineReducers({
  score,
})

export default AppReducer

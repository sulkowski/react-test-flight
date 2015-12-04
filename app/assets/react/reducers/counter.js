import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

const initialState = 0

// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return state + 1
//     case DECREMENT_COUNTER:
//       return state - 1
//     default:
//       return state
//   }
// }

export default function counter(state = initialState, action) {
  if (action.type) {
    let fn = Responses[action.type];
    if (typeof fn === "function") { return Responses[action.type](state); }
  }
  return state;
}

let Responses = {
  INCREMENT_COUNTER: (state) => state + 1,
  DECREMENT_COUNTER: (state) => state - 1
}

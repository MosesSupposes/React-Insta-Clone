import C from './constants'

export function commentsReducer(state, action) {
    switch(action.type) {
      case C.ADD_COMMENT: 
      {   // intentional block scope
        let oldComments = state[action.payload.postId] || []
        return {
          ...state,
          [action.payload.postId]: [...oldComments, {...action.payload}]
        }
      }
      case C.EDIT_COMMENT:
      case C.DELETE_COMMENT:
      default: 
        return state
    }
  }
  
export function postsReducer(state, action) {
    switch(action.type) {
        case C.ADD_POST:
        return state.concat(action.payload)
        case C.DELETE_POST:
        case C.LIKE_POST:
        case C.UNLIKE_POST:
        default:
          return state
    }
}
  
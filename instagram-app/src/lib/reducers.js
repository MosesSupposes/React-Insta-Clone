import C from './constants'


export function commentsReducer(state, action) {
  const prevComments = state[action.payload.postId] || []

  switch(action.type) {
    case C.ADD_COMMENT: 
      return {
        ...state,
        [action.payload.postId]: [...prevComments, {...action.payload}]
      }
      case C.DELETE_COMMENT:
      // TODO: ensure user can only delete comments created by them
        return {
          ...state,
          [action.payload.postId]: [
            ...prevComments.slice(0, action.payload.index),
            ...prevComments.slice(action.payload.index + 1)
          ]
        }
      case C.EDIT_COMMENT:
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
  
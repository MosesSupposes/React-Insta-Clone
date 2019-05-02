import C from './constants'
import * as R from 'ramda'
import { poorMansContext } from '../App'


export function commentsReducer(state, action) {
  const prevComments = state[action.payload.postId] || []
  /* 
    TODO: poorMansContext.username is coming back as undefined,
    so for now the check provided below is hard coded
    to be the default username provided by the app.
    Fix this context value (defined in App.js) so that 
    the check below can be dynamic, rather than static.
  */
  const commentAddedByUser = R.equals(poorMansContext.username || 'jane doe', action.payload.author)

  switch(action.type) {
    case C.ADD_COMMENT: 
      return {
        ...state,
        [action.payload.postId]: [...prevComments, {...action.payload}]
      }
      case C.DELETE_COMMENT:
        return {
          ...state,
          [action.payload.postId]: 
            (commentAddedByUser)
              ? [
                  ...prevComments.slice(0, action.payload.index),
                  ...prevComments.slice(action.payload.index + 1)
                ]
              : [...prevComments]
          
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
  
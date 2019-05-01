// React imports
import React, { useReducer, useEffect } from 'react'

// styles
import './App.css'

// components
import SearchBar from './components/SearchBar/SearchBar'
import PostGrid from './components/PostGrid/PostGrid'

// utils
import uuid from 'uuid/v4'
import * as R from 'ramda'
import * as _ from './util'

// data
import dummyData from '../src/dummy-data'
import C from './constants'

// TODO: use R.transduce to massage dummy data before injecting it into state
const withUniqueId = post => ({...post, id: uuid()}) 
const filterOutComments = _.filterObj(key => key !== 'comments')
const withNoCommentsAndUniqueId = R.map(R.compose(withUniqueId ,filterOutComments))

const initialState = {
  posts: withNoCommentsAndUniqueId(dummyData), // dummyData + uuid for each post
  username: 'john doe',
}

initialState.comments = 
  R.zipObj(
    R.pluck('id', initialState.posts), 
    R.pluck('comments', dummyData)
  )

  /* Comments' shape [
    { [post.id]: [comment1, comment2, ...] },
    { [post.id]: [comment1, comment2, ...] },
    { [post.id]: [...] }
  ]
  */




export default function App() {
  // TODO: add likes reducer (and figure out where 'likes' belongs on state)
  const [comments, dispatchComments] = useReducer(commentsReducer, initialState.posts)
  const [posts, dispatchPosts] = useReducer(postsReducer, initialState.comments)
  
  // componentDidMount() {    
  //   this.setState({posts : dummyData})
  // }
  
  console.log(initialState)
  return (
    <div className="App">

      <SearchBar />

      {/* <PostGrid posts = {state.posts} /> */}
      <PostGrid posts = {dummyData} />

    </div>
  )

}


// ---- Reducers ----

function commentsReducer(state, action) {
  switch(action.type) {
    case C.ADD_COMMENT:
      return state.concat(action.payload)
    case C.EDIT_COMMENT:
    case C.DELETE_COMMENT:
    default: 
      return state
  }
}

function postsReducer(state, action) {
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

import React, {useReducer, useLayoutEffect} from 'react'
import './App.css'

import SearchBar from './components/SearchBar/SearchBar'
import PostGrid from './components/PostGrid/PostGrid'

import * as R from 'ramda'
import uuid from 'uuid/v4'

import dummyData from '../src/dummy-data'
import C from './constants'

  // TODO: add more robust id generation 
const withUniqueId = R.map((post, i) => post.id = uuid())

const initialState = {
  posts: withUniqueId(dummyData), // dummyData + uuid for each post
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


// function rootReducer(state, action) {
//   switch(action.type.toUpperCase()) {
//     case C.ADD_COMMENT:
//       const lastPost = state.posts.slice(-1)
//       return {
//         posts: state.posts.concat({
//           ...state.posts.slice(-1),
//           // comments: lastPost.commtext: action.payload.text,
//         })
//       }
  
//     default: 
//       return state
//   }
// }

// function commentsReducer() {

// }

// function postsReducer() {

// }

export default function App() {
  // const [state, dispatch] = useReducer(rootReducer, initialState)
  
  // componentDidMount() {    
  //   this.setState({posts : dummyData})
  // }
  return (
    <div className="App">

      <SearchBar />

      {/* <PostGrid posts = {state.posts} /> */}
      <PostGrid posts = {dummyData} />

    </div>
  )

}

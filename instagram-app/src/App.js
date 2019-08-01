// ----- Imports ---- 


// React imports
import React, { useReducer, useEffect, useState } from 'react'

// styles
import './App.css'

// components
import SearchBar from './components/SearchBar/SearchBar'
import PostGrid from './components/PostGrid/PostGrid'

// utils
import uuid from 'uuid/v4'
import * as R from 'ramda'
import * as _ from './lib/util'

// data
import dummyData from '../src/dummy-data'

// actions + reducers
import { postsReducer, commentsReducer } from './lib/reducers'
import * as actions from './lib/actionCreators'


// ---- Helpers / Setup ----


// TODO: use R.transduce to massage dummy data before injecting it into state
const withUniqueId = post => ({...post, id: uuid()}) 
const filterOutComments = _.filterObj(key => key !== 'comments')
const withNoCommentsAndUniqueId = R.map(R.compose(withUniqueId ,filterOutComments))

const initialState = {
  posts: withNoCommentsAndUniqueId(dummyData), // dummyData + uuid for each post
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

// Global username context
export const UsernameCtx = React.createContext()


// ---- Main: App Component ----


export default function App() {
  // TODO: add likes reducer (and figure out where 'likes' belongs on state)
  const [comments, dispatchComments] = useReducer(commentsReducer, initialState.comments)
  const [posts, dispatchPosts] = useReducer(postsReducer, initialState.posts)
  
  return (
    <div className="App">
      <SearchBar />

      <UsernameCtx.Provider value='jane doe'>
        <PostGrid 
          posts = {[posts, dispatchPosts]} 
          comments={[comments, dispatchComments]}
          />
      </UsernameCtx.Provider>
    </div>
  )
}
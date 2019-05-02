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


// ---- Main: App Component ----


export default function App() {
  // TODO: add likes reducer (and figure out where 'likes' belongs on state)
  const [comments, dispatchComments] = useReducer(commentsReducer, initialState.comments)
  const [posts, dispatchPosts] = useReducer(postsReducer, initialState.posts)
  const [username, setUsername]  = useState('john doe')

  /* this useEffect call is essentially useless
    -- there's no need to initialize state twice --
    but it's there to fulfill Lambda's requirement of using the
    `componentDidMount` lifecyle hook to populate state on pageLoad.

    The result of this call is that after the page gets populated with posts, they all get rerendered 
    to the page

    TODO: the duplicate posts are missing a username and time stamp. Fix this.

    (The new hooks are better than the old ones ;P)
  */
  useEffect(() => {

    setUsername('jane doe') 

    Object.values(initialState.comments).forEach(
      (comment) => dispatchComments(actions.addComment(comment))
    )

    initialState.posts.forEach(
      (post) => dispatchPosts(actions.addPost(post))
    )
  }, [])
  
  return (
    <div className="App">
      <SearchBar />

      <PostGrid 
        username={[username, setUsername]}
        posts = {[posts, dispatchPosts]} 
        comments={[comments, dispatchComments]}
      />
    </div>
  )
}

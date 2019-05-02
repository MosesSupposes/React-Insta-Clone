import React from 'react'

import PostContainer from "../PostContainer/PostContainer"

import { useStateTuple, useReducerTuple } from 'util'


// mapperFn
const renderPost = (props) => (val, index, arr) => (
    <PostContainer key={index} {...props} post={val}  />
)


export default function PostGrid(props){
    const { posts: [allPosts, _], username, comments } = props 
    return allPosts.map(renderPost({username, comments}))
}


PostGrid.propTypes = {
    username: useStateTuple,
    posts: useReducerTuple,
    comments: useReducerTuple
}
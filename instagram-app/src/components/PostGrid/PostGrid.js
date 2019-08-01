import React from 'react'

import PostContainer from "../PostContainer/PostContainer"

import { useReducerTuple } from 'util'


// mapperFn
const renderPost = (props) => (val, index, arr) => (
    <PostContainer key={index} {...props} post={val}  />
)


export default function PostGrid(props){
    const { posts: [allPosts, _], comments } = props 
    return allPosts.map( renderPost({comments}) )
}


PostGrid.propTypes = {
    posts: useReducerTuple,
    comments: useReducerTuple
}
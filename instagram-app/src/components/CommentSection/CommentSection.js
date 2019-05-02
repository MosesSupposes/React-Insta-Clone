import React, { useState } from "react";
import PropTypes from "prop-types";

import "./CommentSection.css"

import { addComment } from '../../lib/actionCreators'


export default function CommentSection(props) {
    const [ newComment, setNewComment ] = useState('')

    const { 
        postId,
        username: [username, _],
        comments : [ comments, dispatchComments ]
    } = props

    const handleChange = (e) => {
        setNewComment(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        console.log('submitted')
        e.preventDefault()
        dispatchComments(addComment({
            postId,
            username,
            text: newComment,
            createdAt: Date.now()
        }))
        setNewComment('')
    }
    
    return ( 
        <div className="comment-section"> 
            {comments[postId].map(renderComment)} 
            <hr/>

            <form onSubmit={handleSubmit}>    
                <input 
                    className="add-comment" 
                    placeholder="Add a comment..." 
                    value={newComment}
                    onChange={handleChange}
                />
            </form>
        </div> 
    )
}

function renderComment(props, index){
    return (
        <div key={index*100} className="comment">
            <span className="comment-user-name">{props.username}</span>
            <span className="comment-content">{props.text}</span>
        </div>
    )
}


// TODO: add proper proptypes (across the whole app, really)
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

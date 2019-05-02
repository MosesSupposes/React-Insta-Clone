import React, { useState } from "react";
import PropTypes from "prop-types";

import "./CommentSection.css"

import { addComment, deleteComment } from '../../lib/actionCreators'


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
        e.preventDefault()
        dispatchComments(addComment({
            postId,
            username,
            text: newComment,
            createdAt: Date.now()
        }))
        setNewComment('')
    }

    const handleClick = (postId, index, e) => {
        dispatchComments(deleteComment({
            postId,
            index
        }))
    }


    const renderComment = (comment, index) => (
        <div key={index} className="comment">
            <span className="comment-user-name">{comment.username}</span>
            <span className="comment-content">{comment.text}</span>
            <span 
                className='delete-comment' 
                style={{color: 'red', marginLeft: '1rem'}}
                onClick={handleClick.bind(null, postId, index)}
            >
                &times;
            </span>
        </div>
    )
    
    
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


// TODO: add proper proptypes (across the whole app, really)
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

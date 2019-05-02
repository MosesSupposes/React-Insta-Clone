import React, { useState } from "react";
import PropTypes from "prop-types";

import "./CommentSection.css"

import { addComment, editComment, deleteComment } from '../../lib/actionCreators'


export default function CommentSection(props) {
    // ---- Local state ----

    const [ newComment, setNewComment ] = useState('')
    const [ isEditing, setIsEditing ] = useState(false)
    const [ indexToEdit, setIndexToEdit ] = useState(-Infinity)


    // ---- Destructuring props ----

    const { 
        postId,
        username: [username, _],
        comments : [ comments, dispatchComments ]
    } = props
    

    // ---- Event handlers ----

    const handleChange = (e) => {
        setNewComment(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEditing) {
            setIsEditing(false)
            dispatchComments(editComment({
                postId,
                index: indexToEdit,
                text: newComment,
                author: username
            }))

        } else {
            dispatchComments(addComment({
                postId,
                username,
                text: newComment,
                createdAt: Date.now()
            }))
        }
        setNewComment('')
    }

    const handleClick = (payload, e) => {
        switch(payload.message.toUpperCase()) {
            case 'EDIT':
                setIsEditing(true)
                setIndexToEdit(payload.index)
                break

            case 'DELETE':
                dispatchComments(deleteComment({
                    postId,
                    index: payload.index,
                    author: payload.author
                }))
                break
            
            default:
                console.log('not a valid message:', payload.message)

        }
    }


    // ---- JSX helper ----

    const renderComment = (comment, index) => {
        const payload = {
            postId, 
            index, 
            author: comment.username
        }
        const deletePayload = {
            ...payload,
            message: 'DELETE'
        }

        const editPayload = {
            ...payload,
            message: 'EDIT'
        }

        return (
            <div key={index} className="comment">
                <span className="comment-user-name">{comment.username}</span>
                <span className="comment-content">{comment.text}</span>
                {
                    (comment.username === username) &&
                    <>
                    <span 
                        className='edit-comment' 
                        onClick= {handleClick.bind(null, editPayload)}
                    >
                        Edit
                    </span>
                    <span 
                        className='delete-comment' 
                        onClick= {handleClick.bind(null, deletePayload)}
                    >
                        &times;
                    </span>
                    </>
                }
            </div>
        )
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


// TODO: add proper proptypes (across the whole app, really)
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

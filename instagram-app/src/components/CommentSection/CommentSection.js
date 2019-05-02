import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CommentSection.css"

export default function CommentSection(props) {
    const [ newComment, setNewComment ] = useState('')

    const { 
        postId,
        comments : [ comments, dispatchComments ]
    } = props

    const handleChange = (e) => {
        console.log(e.currentTarget.value)
        setNewComment(e.currentTarget.value)
    }
    
    return ( 
        <div className="comment-section"> 
            {comments[postId].map(renderComment)} 
            <hr/>

            {/* <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} className="add-comment" placeholder="Add a comment..." />
            </form> */}
            <input 
                className="add-comment" 
                placeholder="Add a comment..." 
                value={newComment}
                onChange={handleChange}
            />
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

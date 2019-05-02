import React from 'react';
import PropTypes from "prop-types"
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import { useStateTuple, useReducerTuple } from '../../lib/util'

export default function PostContainer(props, index){
    return (
        <article key={index} className="card">
            <header className="post-header">
                <img src={props.post.thumbnailUrl} className="thumbnail-img" alt="thumbnail"/>
                <div className="users-name"> {props.post.username} </div> 
            </header>

            <span className="timestamp">{props.post.timestamp || Date.now()}</span> {/* I removed timestamp prop, so Date.now is temporary default */}

            <img src={props.post.imageUrl} className="post-image" alt="post" />     

            <div className="user-interaction">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>

            <p className="likes">{props.post.likes} likes</p>

            <CommentSection username={props.username} comments={props.comments} />
        </article>
    )
}

PostContainer.propTypes = {
    username: useStateTuple,
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string
    }),
    comments: useReducerTuple
}



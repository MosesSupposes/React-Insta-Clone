import React from 'react';
import PropTypes from "prop-types"
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props, index){
    return (
            <div key={index} className="card">
                <div className="post-header">
                    <img src={props.thumbnailUrl} className="thumbnail-img" alt="thumbnail"/>
                    <div className="users-name"> {props.username} </div> 
                </div>
                <img src={props.imageUrl} className="post-image" alt="post" />     
                <div className="user-interaction">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <p className="likes">{props.likes} likes</p>


                <CommentSection username={props.username} comments={props.comments} />

            </div>
        )
}

PostContainer.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
}



export default PostContainer;
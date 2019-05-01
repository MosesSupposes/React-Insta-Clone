import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CommentSection.css"

class CommentSection extends Component {
    state = {
        comments: [],
        value: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            console.log('state:', this.state)
            console.log('prevState', prevState)
            return {
                ...prevState,
                comments: prevState.comments.concat({
                    username: this.props.username,
                    text: 'why isnt this working?',
                    createdAt: Date.now()
                })
            }})

        setTimeout(() => console.log(this.state.comments), 3000)
    }

    handleChange = (e) => {
        this.setState({value: e.target.textContent})
    }
    
    render() {
        return ( 
            <div className="comment-section"> 
                {this.props.comments.map(renderComment)} 
                <span className="timestamp">{this.props.timestamp || Date.now()}</span> {/* I removed timestamp prop, so Date.now is temporary default */}
                <hr/>

                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} className="add-comment" placeholder="Add a comment..." />
                </form>

                
                <div style={{color:'red', border: 'red'}}>{this.state.value}</div>
            </div> 
        )
    }
}

function renderComment(props, index){
    return (
        <div key={index*100} className="comment">
            <span className="comment-user-name">{props.username}</span>
            <span className="comment-content">{props.text}</span>
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;
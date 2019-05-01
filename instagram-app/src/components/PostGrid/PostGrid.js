import PropTypes from 'prop-types'
import PostContainer from "../PostContainer/PostContainer"

export default function PostGrid(props){
    console.log(props)
    return props.posts.map(PostContainer)
}


PostGrid.propTypes = {
    posts: PropTypes.array
}
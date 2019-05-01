import PropTypes from 'prop-types'
import PostContainer from "../PostContainer/PostContainer"

export default function PostGrid({posts:[allPosts, _]}){
    return allPosts.map(PostContainer)
}


PostGrid.propTypes = {
    posts: PropTypes.array
}
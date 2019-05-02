import C from './constants'

export const addComment = ({postId, username, text, createdAt}) => ({ 
    type: C.ADD_COMMENT,
    payload: { postId, username, text, createdAt }
})

export const deleteComment = ({postId, index, author}) => ({
    type: C.DELETE_COMMENT,
    payload: { postId, index, author }
})

export const addPost = ({
    id, 
    userName, 
    thumbnailUrl, 
    imageUrl, 
    likes, 
    timeStamp
}) => ({
    type: C.ADD_POST,
    payload: { id, userName, thumbnailUrl, imageUrl, likes, timeStamp}
})

import C from './constants'

// TODO: add action creators here
export const addComment = ({postId, username, text, createdAt}) => ({ 
    type: C.ADD_COMMENT,
    payload: { postId, username, text, createdAt }
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

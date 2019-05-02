import C from './constants'

// ---- Comments ----


export const addComment = ({postId, username, text, createdAt}) => ({ 
    type: C.ADD_COMMENT,
    payload: { postId, username, text, createdAt }
})

export const editComment = ({postId, index, text, author}) => ({
    type: C.EDIT_COMMENT,
    payload: {postId, index, text, author}
})

export const deleteComment = ({postId, index, author}) => ({
    type: C.DELETE_COMMENT,
    payload: { postId, index, author }
})



// ---- Posts ----

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

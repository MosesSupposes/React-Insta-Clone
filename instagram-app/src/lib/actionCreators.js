import C from './constants'

// ---- Comments ----


export const addComment = ({postId, username, text, createdAt}) => 
    ({ 
        type: C.ADD_COMMENT,
        payload: { postId, username, text, createdAt }
    })

export const editComment = ({postId, index, text, author}) => 
    ({
        type: C.EDIT_COMMENT,
        payload: { 
            index, 
            postId, 
            author,
            username: author, // This is for the renderComment helper (in CommentSection.js)... it needs this field
            text
        }
    })

export const deleteComment = ({postId, index, author}) => 
    ({
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

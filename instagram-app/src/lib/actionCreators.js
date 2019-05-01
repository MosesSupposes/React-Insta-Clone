import C from './constants'

// TODO: add action creators here
export const addComment = ({user, text, createdAt}) => ({ 
    type: C.ADD_COMMENT,
    payload: { user, text, createdAt}
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

import { ADD_TASK, CREATE_POST, GET_LIST_TAGS, HIDE_CREATE_POST, SELECT_DATE, SHOW_MODAL_TAG, HIDE_MODAL_TAG, CREATE_TAG, REMOVE_TAG, RESET_TAG, UPDATE_DONE_TASK, UPDATE_TASK, UPDATE_TAG, UPDATE_TAG_TASK, REMOVE_TASK, FILTER_TAG, SHOW_SIDEBAR, HIDE_SIDEBAR } from "./type"


//action для открытия формы для создания таска
export const createPost=(val)=> {
    return {
        type:CREATE_POST,
        payload: val
    }

}

export const removeTask = (id)=> {
    return {
        type:REMOVE_TASK,
        payload:id
    }
}
export const hideCreatePost=()=> {
    return {
        type:HIDE_CREATE_POST
    }
}

export const addTask=(task)=> {

    return async dispatch => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
        dispatch(hideCreatePost())
    }
}

export const selectDate = (date) => {
    return{
        type: SELECT_DATE,
        payload: date
    }
}

export const getTags = () => {
    return {
        type: GET_LIST_TAGS
    }
}

export const getTagById = (id) => {
    
   return JSON.parse(localStorage.getItem('tags')).tags.find(item=>item.id = id)
    
}

export const hideModalTag =()=> {
    return {
        type: HIDE_MODAL_TAG
    }
}

export const showSideBar = () => {
    return {
        type: SHOW_SIDEBAR
    }
}

export const hideSideBar = () => {
    return {
        type: HIDE_SIDEBAR
    }
}


export const showModalTag = (val)=> {
    return {
        type: SHOW_MODAL_TAG,
        payload: val
    }
}

export const createTag = (tag) => {
    return async dispatch => {
        dispatch({
            type: CREATE_TAG,
            payload: tag
        })
        dispatch(hideModalTag())
    }
}

export const resetTag = (idTag) => {
    return {
        type: RESET_TAG,
        payload: idTag
    }
}

export const updateTagTask = (idTag,idOld) => {
    return {
        type: UPDATE_TAG_TASK,
        payload: {
            newTag: idTag,
            oldTag: idOld
        }
    }
}

export const removeTag = (idTag) => {
    return async dispatch => {
        dispatch(resetTag(idTag))
        dispatch({
            type: REMOVE_TAG
        })
        
    }
}

export const updateDonTask = (idTask) => {
    return {
        type: UPDATE_DONE_TASK,
        payload: idTask
    }
}

export const updateTag = (tag,idOldTag) => {
    
    return async dispatch =>  {
        dispatch({
            type: UPDATE_TAG,
            payload: {...tag,idOldTag}
        })
        dispatch(updateTagTask(tag.id,idOldTag))
        dispatch(hideModalTag())
    }
        
}

export const updateTask = (task,idOldTask) => {
    return async dispatch => {
        dispatch({
            type:UPDATE_TASK,
            payload:task
        })
        dispatch(hideCreatePost())
    }
}

export const filterTag=(tag)=> {
    return {
        type:FILTER_TAG,
        payload:tag
    }
}

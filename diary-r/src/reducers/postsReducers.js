import { ADD_TASK, CREATE_POST, HIDE_CREATE_POST, HIDE_SIDEBAR, REMOVE_TASK, RESET_TAG, SHOW_SIDEBAR, UPDATE_DONE_TASK, UPDATE_TAG_TASK, UPDATE_TASK} from "../actions/type"

const initialState = {
    posts: [],
    modal: {
        isCreateTask: false,
        editTasks: null
    },
    sidebar: false
}

if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify(initialState))
}


export const postReducer = (state = JSON.parse(localStorage.getItem('posts')), action) => {
    switch (action.type) {
        case CREATE_POST:
            {
                localStorage.setItem('posts', JSON.stringify({...state, modal: {isCreateTask: true,editTasks:action.payload}}))
                return JSON.parse(localStorage.getItem('posts'))
            }
        case UPDATE_TASK: {
            let indexTag = JSON.parse(localStorage.getItem('posts')).posts.findIndex(item=>item.id===action.payload.id);
            state.posts.splice(indexTag,1,action.payload)
            localStorage.setItem('posts',JSON.stringify({...state, posts:[...state.posts]}))
            state.modal.editTasks = null;
            return  JSON.parse(localStorage.getItem('posts'))
        }
        case REMOVE_TASK: {
            
            let indexTag = JSON.parse(localStorage.getItem('posts')).posts.findIndex(item=>item.id===action.payload);
            
            state.posts.splice(indexTag,1)
            ///state.tags.splice(indexTag,1)
            localStorage.setItem('posts',JSON.stringify({...state,posts:[...state.posts]}))
            return JSON.parse(localStorage.getItem('posts')) 
        }
        case HIDE_CREATE_POST:
            {
                localStorage.setItem('posts', JSON.stringify({...state, modal: {isCreateTask: false,editTasks:null}}))
                return JSON.parse(localStorage.getItem('posts'))
            }
        case ADD_TASK:{
            localStorage.setItem('posts',JSON.stringify({...state, posts:[{...action.payload,id:`${state.posts.length}_${action.payload.inputTitleTask}`},...state.posts]}))
            return  JSON.parse(localStorage.getItem('posts'))
        }

        case RESET_TAG: {
            localStorage.setItem('posts', JSON.stringify({...state, posts: state.posts.map(item=> item.tag === action.payload ? {...item,tag:'tag-no'}:item)}))
            return JSON.parse(localStorage.getItem('posts'))
        }
        case UPDATE_TAG_TASK: {
            localStorage.setItem('posts', JSON.stringify({...state, posts: state.posts.map(item=> item.tag === action.payload.oldTag ? {...item,tag:action.payload.newTag}:item)}))
            return JSON.parse(localStorage.getItem('posts'))
        }
        case UPDATE_DONE_TASK: {
            localStorage.setItem('posts', JSON.stringify({...state,posts: state.posts.map(item => item.id === action.payload ? {...item,done: !item.done}: item)}))
            return JSON.parse(localStorage.getItem('posts'))
        }
        
        case SHOW_SIDEBAR:
            return {...state,sidebar:true}
        case HIDE_SIDEBAR:
            return {...state,sidebar:false}

        default: return state
    }
}
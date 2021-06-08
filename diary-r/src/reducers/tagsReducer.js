import { CREATE_TAG, FILTER_TAG, GET_LIST_TAGS, GET_TAG_BY_ID, HIDE_MODAL_TAG, REMOVE_TAG, SHOW_MODAL_TAG, UPDATE_TAG } from "../actions/type";

const initialState = {
    tags: [
        {
            type:'no',
            id:'tag-no',
            color:'gray'
        },
        {
            type:'shop',
            id:'tag-shop',
            color: '#9131eb'
        },
        {
            type:'sport',
            id:'tag-sport',
            color:'#34abeb'
        },
        
    ],
    modal: {
        isOpen: false,
        editTag: null
    },
    filterTag: 'all'
}



if (!localStorage.getItem('tags')) {
    localStorage.setItem('tags',JSON.stringify(initialState));
}

export const tagsReducer = (state = JSON.parse(localStorage.getItem('tags')), action) => {
    switch(action.type) {
        case GET_LIST_TAGS:
            return state.tags;
        // case GET_TAG_BY_ID:{
        //     state.tags.find(item=>item.id===action.id)
        //     console.log(state.tags.find(item=>item.id===action.id))
        // }
        case HIDE_MODAL_TAG:
            localStorage.setItem('tags',JSON.stringify({...state,modal: {editTag: action.payload, isOpen: false}}))
            return {...state,modal: {editTag: null, isOpen: false}};
        case SHOW_MODAL_TAG:
            localStorage.setItem('tags',JSON.stringify({...state,modal: {editTag: action.payload, isOpen: true}}))
            return {...state, modal: {editTag: action.payload, isOpen: true}}
        case CREATE_TAG:
            localStorage.setItem('tags',JSON.stringify({...state, tags:[...state.tags,action.payload]}))
            return  JSON.parse(localStorage.getItem('tags'))
            // return {...state, tags: [action.payload,...state.tags]}
        case REMOVE_TAG:
            let indexTag = JSON.parse(localStorage.getItem('tags')).tags.findIndex(item=>item.id===action.payload);
            
            state.tags.splice(indexTag,1)
            ///state.tags.splice(indexTag,1)
            localStorage.setItem('tags',JSON.stringify({...state,tags:[...state.tags]}))
            return JSON.parse(localStorage.getItem('tags')) 
        case UPDATE_TAG: {
            let indexTag = JSON.parse(localStorage.getItem('tags')).tags.findIndex(item=>item.id===action.payload.idOldTag);
           
            //console.log(JSON.parse(localStorage.getItem('tags')).tags.findIndex(item=>item.id===action.payload.id))
            state.tags.splice(indexTag,1,action.payload)
            localStorage.setItem('tags',JSON.stringify({...state, tags:[...state.tags]}))
            state.modal.editTag = null;
            return  JSON.parse(localStorage.getItem('tags'))
        }
        case FILTER_TAG: {
            localStorage.setItem('tags',JSON.stringify({...state, filterTag:action.payload}))
            return JSON.parse(localStorage.getItem('tags'))
        }
        default:
            return state;
    }
}
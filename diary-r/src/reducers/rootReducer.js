import {combineReducers} from 'redux';
import { postReducer } from './postsReducers';
import {tagsReducer} from './tagsReducer'
import {calendarReducer} from './calendarReducer'

const profileDate = {
    FullName: "Enter your name",
    srcAvatar: ''
}

if (!JSON.parse(localStorage.getItem('profile'))) {
    localStorage.setItem('profile',JSON.stringify(profileDate));
}

export const rootReducer = combineReducers ({
    tasks: postReducer,
    tags: tagsReducer,
    calendar: calendarReducer
    
})
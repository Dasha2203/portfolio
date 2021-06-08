import { SELECT_DATE } from "../actions/type"

const initialState = {
    selectDate: {},
    
}


export const calendarReducer = (state = initialState, action)=> {
    switch(action.type) {
        case SELECT_DATE:
            {
                
                return {...state, selectDate:action.payload}
            }
            
        default: return state
    } 
}
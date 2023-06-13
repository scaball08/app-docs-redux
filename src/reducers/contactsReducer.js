import initialState from "./initialsState";
import {} from '../actions/index'

const contectReducer =  (state = initialState.contacts, action)=> {

    switch (action.type) {
        case 'ADD_NEW_CONTACT':
            
            return {
                ...state,
                contactList : [...state.contactList, state.newContact]
            }
        case "HANDLE_INPUT_CHANGE":
        
            return {
                ...state,
                newContact:{...state.newContact, ...action.payload}
            }
    
        default:
            return state;
    }

}



export default contectReducer;
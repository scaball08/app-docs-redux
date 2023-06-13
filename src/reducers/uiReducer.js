import initialState from './initialsState'


  const uiReducer = (state = initialState.ui,action)=>{

    switch (action.type) {
        case 'TOGGLE_CONTACT_FORM':
            
            return {
                ...state,
                isContactFormHidden : !state.isContactFormHidden
            }
    
        default:
            return state;
    }

}

export default uiReducer;
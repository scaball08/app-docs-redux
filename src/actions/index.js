    const HANDLE_INPUT_CHANGE =  "HANDLE_INPUT_CHANGE";

    const ADD_NEW_CONTACT =  "ADD_NEW_CONTACT";

    const TOGGLE_CONTACT_FORM =   "TOGGLE_CONTACT_FORM";

    export const addContact = ()=>{
        return {
            type:ADD_NEW_CONTACT
        }
    }

    export const handleInputChange = (name,value)=>{

        return {
            type:HANDLE_INPUT_CHANGE,
            [name]:value
        }
    }
 
export const toggleContactForm = () => {
    return {
        type: TOGGLE_CONTACT_FORM,
    }
}
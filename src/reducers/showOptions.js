import {SHOW_FORM, SHOW_MODAL, HIDE_FORM, HIDE_MODAL} from "../constants/actionTypes"

const initialState = {
    showForm: false,
    showModal: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action) => {

    switch(action.type) {
        case SHOW_FORM: 
            return {showForm: true};
            
        case SHOW_MODAL:
             return {showModal: true}    
         
        case HIDE_FORM: 
            return {showForm: false};
            
        case HIDE_MODAL:
             return {showModal: false}         
        default: return state;    
    }
}
import {SHOW_FORM, SHOW_MODAL, HIDE_FORM, HIDE_MODAL} from "../constants/actionTypes"

export const showFormAction = () => (dispatch) => {
    dispatch({type: SHOW_FORM})
}

export const showModalAction = () => (dispatch) => {
    dispatch({type: SHOW_MODAL})
}

export const hideModalAction = () => (dispatch) => {
    dispatch({type: HIDE_MODAL})
}

export const hideFormAction = () => (dispatch) => {
    dispatch({type: HIDE_FORM})
}

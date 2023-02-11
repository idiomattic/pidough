import { DISPLAY_MODAL, HIDE_MODAL } from "../actions/modal_actions";
import { RECEIVE_SESSION_ERRORS, RECEIVE_USER_SIGNIN, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const modalReducer = (state=null, action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return action.modal
    case HIDE_MODAL:
      return null
    case RECEIVE_CURRENT_USER:
      return null
    case RECEIVE_USER_SIGNIN:
      return null
    case RECEIVE_SESSION_ERRORS:
      return state
    default:
      return state
  }
}

export default modalReducer
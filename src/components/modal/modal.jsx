import React from "react";
import SignInFormContainer from "../session/signin_form_container";
import SignUpFormContainer from '../session/signup_form_container'

function Modal({modal, hideModal}) {
  if (!modal) {
    return null;
  }
  let component
  switch (modal) {
    case 'Sign In':
      component = <SignInFormContainer />
      break
    case 'Sign Up':
      component = <SignUpFormContainer />
      break
    default:
      return null;
  }
  return (
    <div className='modal-background fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50' onClick={hideModal}>
      <div className='modal-container max-w-xl p-6 bg-white divide-y divide-gray-500 border-2 border-yellow-900 rounded-sm' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import _ from 'lodash';

const SessionForm = ({ action, clearErrors, errors, formType, otherForm }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    password2: ''
  });

  useEffect(() => {
    clearErrors();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await action(form)
  }

  const update = (field) => {
    return e => {
      clearErrors();
      return setForm({
        ...form,
        [field]: e.target.value
      })
    }
  }

  const handleErrors = () => {
    return(
      <ul className='session error-list'>
        {errors.map((error, i) => (
          <li key={i} className='text-red-600'>{error}</li>
        ))}
      </ul>
    )
  }

  const formGreeting = () => {
    return formType === 'Sign In' ? 'Welcome Back.' : 'Join PiDough.'
  }

  const password2 = () => {
    return formType === 'Sign In' ? null 
      : <label>Retype Password:
          <br />
          <input className='w-64 mb-3 border-b-2 border-yellow-900 outline-0' 
            type="password" 
            value={form.password2} 
            onChange={update('password2')} />
        </label>
  };

  return(
    <div className=''>
      <h2 className='mb-4 font-medium' >{formGreeting()}</h2>
      <form className='session-form' onSubmit={handleSubmit}>
        <label>Username:
          <br />
          <input className='w-64 mb-3 border-b-2 border-yellow-900 outline-0' 
            type="text  " 
            value={form.username} 
            onChange={update('username')} />
        </label>
        <br />
        <label>Password:
          <br />
          <input className='w-64 mb-3 border-b-2 border-yellow-900 outline-0' 
            type="password" 
            value={form.password} 
            onChange={update('password')} />
        </label>
        <br />
        {password2()}
        {handleErrors()}
        <br />
        <input className='mb-3 cursor-pointer font-medium text-gray-800 hover:text-black hover:italic' 
          type="submit" 
          value={formType} />
        <br />
        {otherForm}
      </form>
    </div>
  )
}

export default withRouter(SessionForm)
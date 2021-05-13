import React, { useState } from 'react'
import '@/access/signin.css'
import { post } from '@/api/BaseRequest'

const SignIn = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const { username, password } = inputs

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(inputs => ({ ...inputs, [name]: value }))
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    const url = '/oauth/token'
    const data = {
      'grant_type': 'password',
      'client_id': '1',
      'client_secret': 'nFzLk7YjUzI2Qorhb43etp7ZSZYMdJ1PiJJUtWbN',
      'scope': '*',
      'username': inputs.username,
      'password': inputs.password
    }
    post(url, data)
    console.log(data)
  }

  return (
    <div className='login-page'>
      <div className='form'>
        <form className='login-form' role='form' onSubmit={handleSignIn}>
          <input type='text' placeholder='username' name='username' onChange={handleChange} value={username} />
          <input type='password' placeholder='password' name='password' onChange={handleChange} value={password} />
          <input className='btn-login' type='submit' value='LOGIN'/>
          <p className='message'>Not registered? <a href='#'>Create an account</a></p>
        </form>
      </div>
    </div>
  )
}

export default SignIn

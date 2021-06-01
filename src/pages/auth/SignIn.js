import React, { useState } from 'react'
import '@/access/signin.css'
import { post } from '@/api/BaseRequest'
import { useHistory } from 'react-router-dom'
import { setStorageItem } from '@/helper'
import Menu from '@/pages/menu/Menu'
import Footer from '@/pages/footer/Footer'

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

  const history = useHistory()

  const handleSignIn = async(e) => {
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
    const response = await post(url, data)
    console.log(response)

    if (response && response.access_token) {
      setStorageItem('token', response.access_token)
      setStorageItem('refreshToken', response.refresh_token)
      setStorageItem('user_info', JSON.stringify(response.user))
      history.push('/home')
    }

    console.log('Access token: ', response.access_token)
    return response.access_token
  }

  return (
    <div>
      <Menu />
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
      <Footer />
    </div>
  )
}

export default SignIn

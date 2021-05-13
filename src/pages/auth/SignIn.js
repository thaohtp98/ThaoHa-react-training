import React, { Component } from 'react'
import '@/access/signin.css'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUserName(text) {
    this.setState({ username: text.target.value })
  }

  handlePassword(text) {
    this.setState({ password: text.target.value })
  }

  handleSignIn() {
    const api = 'http://127.0.0.1:3000/signin'
    const data = {}
    data.username = this.state.username
    data.password = this.state.password
    const options = {
      header: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ data })
    }
    fetch(api, options).then(function(response) {
      response.json()
    })
  }

  render() {
    return (
      <div className='login-page'>
        <div className='form'>
          <form className='login-form'>
            <input type='text' placeholder='username' onChange={(text) => { this.handleUserName(text) }} />
            <input type='password' placeholder='password' onChange={(text) => { this.handlePassword(text) }} />
            <button onClick={ () => { this.handleSignIn() } }>login</button>
            <p className='message'>Not registered? <a href='#'>Create an account</a></p>
          </form>
        </div>
      </div>
    )
  }
}

export default SignIn

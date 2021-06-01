import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import App from './layouts/App.js'
import HomePage from './pages/home'
import SignIn from './pages/auth/SignIn.js'
import { createBrowserHistory } from 'history'
import { getStorageItem } from '@/helper'

const browserHistory = createBrowserHistory()

const checkAuth = () => {
  const token = getStorageItem('token')
  const refreshToken = getStorageItem('refreshToken')
  if (!token || !refreshToken) {
    return false
  }
  return true
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
      <Redirect to= {{ pathname: '/signin' }} />)
  )} />
)

const routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/signin' component={SignIn} />
      <PrivateRoute path='/home' component={HomePage} />
    </Switch>
  </Router>
)

export default routes

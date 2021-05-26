import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import App from './layouts/App.js'
import HomePage from './pages/home'
import SignIn from './pages/auth/SignIn.js'
import { createBrowserHistory } from 'history'
import { getStorageItem } from '@/helper'
// import decode from 'jwt-decode'

const browserHistory = createBrowserHistory()

const checkAuth = () => {
  const token = getStorageItem('token')
  const refreshToken = getStorageItem('refreshToken')
  if (!token || !refreshToken) {
    return false
  }
  // try {
  //   const { exp } = decode(refreshToken)
  //   if (exp < new Date().getTime() / 1000) {
  //     return false
  //   }
  // } catch (e) {
  //   return false
  // }
  return true
}

const PrivateRoute = ({ /* component: Component,*/ ...rest }) => (
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
      <Route exact path='/' component={HomePage} />
      <Route path='/signin' component={SignIn} />
      <PrivateRoute path='/app' component={App} />
    </Switch>
  </Router>
)

export default routes

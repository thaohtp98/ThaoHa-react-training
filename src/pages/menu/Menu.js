import React from 'react'
import { removeStorageItem, getStorageItem } from '@/helper'
import { Link } from 'react-router-dom'

const handleSignOut = () => {
  removeStorageItem('token')
  removeStorageItem('refreshToken')
  removeStorageItem('user_info')
}

const checkAuth = () => {
  const token = getStorageItem('token')
  const refreshToken = getStorageItem('refreshToken')
  if (!token || !refreshToken) {
    return false
  }
  return true
}

const Menu = () => {
  return (
    <div>
      {/* Navigation*/}
      <nav className='navbar navbar-expand-lg navbar-dark navbar-custom fixed-top'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            Start React
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon' /></button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ms-auto'>
              {checkAuth() ? (
                <>
                  <li className='nav-item'>
                    <Link to='/home' className='nav-link'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/signin' onClick={() => handleSignOut()} className='nav-link'>
                    Sign Out
                    </Link>
                  </li>
                </>
              ) : (
                <li className='nav-item'>
                  <Link to='/signin' className='nav-link'>
                  Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav style={{ marginBottom: '66px' }}></nav>
    </div>
  )
}

export default Menu

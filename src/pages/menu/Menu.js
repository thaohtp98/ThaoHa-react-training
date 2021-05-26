import React from 'react'

const Menu = () => {
  return (
    <div>
      {/* Navigation*/}
      <nav className='navbar navbar-expand-lg navbar-dark navbar-custom fixed-top'>
        <div className='container px-5'>
          <a className='navbar-brand' href='#page-top'>Start Bootstrap</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon' /></button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'><a className='nav-link' href='/signup'>Sign Up</a></li>
              <li className='nav-item'><a className='nav-link' href='/signin'>Sign In</a></li>
              <li className='nav-item'><a className='nav-link' href='/signin'>Sign Out</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className='py-5'></nav>
    </div>
  )
}

export default Menu

import React from 'react'
import logo from '@/logo.svg'
import '@/App.css'
import Menu from '@/pages/menu/Menu'
import Footer from '@/pages/footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Menu />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Footer />
    </div>
  )
}

export default App

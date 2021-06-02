import React from 'react'
import Menu from '@/pages/menu/Menu'
import Footer from '@/pages/footer/Footer'
import ListTask from '@/pages/task/ListTask'
import '@/access/styles.css'

const HomePage = () => (
  <div>
    <Menu />
    <ListTask />
    <Footer />
  </div>
)

export default HomePage

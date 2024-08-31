import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/headers/NavBar'
import Footer from '../pages/Footer'

const MainLayout = () => {
  return (
    <main className='dark:bg-black overflow-hidden'>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </main>
  )
}

export default MainLayout
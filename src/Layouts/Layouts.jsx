import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

function Layouts() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layouts
import React from 'react'
import { BrowserRouter as Router , Routes , Route, Outlet } from 'react-router-dom'
import Navbar from '../../../../Components/Learner/Auth/Navbar/Navbar'

function Home() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Home
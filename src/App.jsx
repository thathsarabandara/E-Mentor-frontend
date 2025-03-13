import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'
import NavBar from './Components/Learner/Navbar/NavBar'
import Footer from './Components/Learner/Footer/Footer'
import Login from './Pages/Learner/auth/Login'
import Register from './Pages/Learner/auth/Register'
import OTP from './Pages/Learner/auth/OTP'
import Home from './Pages/Learner/pages/Home'
import Courses from './Pages/Learner/pages/Courses'
import About from './Pages/Learner/pages/About'
import Contact from './Pages/Learner/pages/Contact'
import Instructor from './Pages/Learner/pages/Instructor'
import Career from './Pages/Learner/pages/Career'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/verifyuser' element={<OTP />} />
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/beaninstructor' element={<Instructor />} />
      </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App

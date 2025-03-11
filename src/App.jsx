import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'
import NavBar from './Components/Learner/Navbar/NavBar'
import Footer from './Components/Learner/Footer/Footer'
import Login from './Pages/Learner/auth/Login'
import Register from './Pages/Learner/auth/Register'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App

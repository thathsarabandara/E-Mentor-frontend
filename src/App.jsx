import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'
import NavBar from './Components/Learner/Navbar/NavBar'
import Footer from './Components/Learner/Footer/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar />
    <Footer />
    </>
  )
}

export default App

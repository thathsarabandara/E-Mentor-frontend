import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'
import NavBar from './Components/Learner/Navbar/NavBar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar />
    </>
  )
}

export default App

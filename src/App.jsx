import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />

        </Routes>


      </Router>


    </>
  )
}

export default App

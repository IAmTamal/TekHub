import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <LandingPage />
    </>
  )
}

export default App

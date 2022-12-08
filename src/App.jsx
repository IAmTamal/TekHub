
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Communities from './pages/Communities'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/profilepages/Profile'
import Routeguard from './middleware/Routeguard'
import Editprofile from './pages/profilepages/Editprofile'

function App() {


  return (
    <>


      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/communities" element={<Communities />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />

          <Route element={<Routeguard />}>
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/editprofile/:id" element={<Editprofile />} />

          </Route>


        </Routes>


      </Router>


    </>
  )
}

export default App



//! PROFILE PAGE (Profile.jsx) = Profile stuffs + Edit stuffs(EditProfile.jsx)

//! Profile stuffs = Profile page + Profile communities + Profile projects + Profile comments
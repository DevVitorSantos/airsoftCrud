
import './App.css'

/* Sistem */
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

/* Firebase */

/* Components */
import NavBar from './components/NavBar'
import Footer from './components/Footer'

/* Hooks */

/* Pages */
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'

function App() {
  

  return (
    <>
       <BrowserRouter>

        <NavBar />
        <div className="app-container">
          <Routes>
              {/* Public Routes */}
              <Route path='/' element={<Home/>} />
              <Route path='/sobre' element={<About/>} />
              <Route path='/login' element={<Login/>} />
              {/* Private Routes */}
            </Routes>
        </div>

        <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App

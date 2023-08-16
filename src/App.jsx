
import './App.css'

/* Sistem */
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

/* Firebase */
import { onAuthStateChanged } from 'firebase/auth';

/* Components */
import NavBar from './components/NavBar'
import Footer from './components/Footer'

/* Context */
import { AuthProvider } from './context/AuthContext'

/* Hooks */
import { HookUseAutentication } from './hooks/HookUseAutentication';

/* Pages */
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'



function App() {
  const [ user, setUser ] = useState(undefined)
  const { auth } = HookUseAutentication()

  const loadingUser = user === undefined

  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <>
      <AuthProvider value={ {user}}>
       <BrowserRouter>

        <NavBar />
        <div className="app-container">
          <Routes>
              {/* Public Routes */}
              <Route path='/' element={<Home/>} />
              <Route path='/sobre' element={<About/>} />
              
              
              {/* Private Routes */}
              <Route 
                path='/login' 
                element={!user ? <Login/> : <Navigate to="/"/>} />
            </Routes>
        </div>

        <Footer/>
       </BrowserRouter>
       </AuthProvider>
    </>
  )
}

export default App

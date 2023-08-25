
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
import { useAutentication } from './hooks/useAutentication';

/* Pages */
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard';
import CreateGame from './pages/CreateGame/CreateGame';
import Search from './pages/Search/Search';
import ViewGame from './pages/ViewGame/ViewGame';
import EditGame from './pages/EditGame/EditGame';



function App() {
  const [ user, setUser ] = useState(undefined)
  const { auth } = useAutentication()

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
              <Route path="/search" element={<Search />} />
              <Route path="/eventos/view/:id" element={<ViewGame />} />
              
              {/* Private Routes */}
              <Route 
                path='/login' 
                element={!user ? <Login/> : <Navigate to="/dashboard"/>} />

              

              <Route 
                path='/dashboard' 
                element={user ? <Dashboard/> : <Navigate to="/login"/>} />

              <Route 
                path='/eventos/edit/:id' 
                element={user ? <EditGame/> : <Navigate to="/login"/>} />

              <Route 
                path='/games/create' 
                element={user ? <CreateGame/> : <Navigate to="/login"/>} />
            </Routes>
        </div>

        <Footer/>
       </BrowserRouter>
       </AuthProvider>
    </>
  )
}

export default App

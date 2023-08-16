import styles from './NavBar.css'

import { NavLink } from 'react-router-dom';

import { HookUseAutentication } from '../hooks/HookUseAutentication'
import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {
  const { user } = useAuthValue() 
  const { logout } = HookUseAutentication()


  return (
    <div className='nav-container'>

      <NavLink to='/' className='logo'>
        Airsoft <span>House</span>
      
      </NavLink>

      <ul className='lista'>
        <li>
          <NavLink to='/'
            className={( {isActive}) => (isActive ? styles.active : "")}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/sobre'
            className={( {isActive}) => (isActive ? styles.active : "")}>
            Sobre
          </NavLink>
        </li>
        
        {!user && (
            <li>
              <NavLink to='/login'
                className={( {isActive}) => (isActive ? styles.active : "")}>
                Login
              </NavLink>
            </li>
        )}
        

        {user && (
          <li>
            <a onClick={logout}>Sair</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default NavBar

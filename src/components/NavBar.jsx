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
        
        <img src="https://www.vitoriaparkshopping.com/wp-content/uploads/2020/01/logo-airsoft.png" alt="" />
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

        { user && (
          <>
            <li>
              <NavLink to='/dashboard'
              className={( {isActive}) => (isActive ? styles.active : "")}>
                Dashboard
              </NavLink>
            </li>

            <li>
            <a onClick={logout}>Sair</a>
            </li>
          
          </>
          
        )}
        
        {!user && (
            <li>
              <NavLink to='/login'
                className={( {isActive}) => (isActive ? styles.active : "")}>
                Login
              </NavLink>
            </li>
        )}
        
        <span className='nav-userImage' >
          <img src={user ? ( user.photoURL )  : 'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-12.jpg'} alt="" />
        </span>

       
      </ul>
    </div>
  )
}

export default NavBar

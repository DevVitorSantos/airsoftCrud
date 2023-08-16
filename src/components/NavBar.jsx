import styles from './NavBar.css'

import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
          <NavLink to='/about'
            className={( {isActive}) => (isActive ? styles.active : "")}>
            Sobre
          </NavLink>
        </li>

        <li>
          <NavLink to='/login'
            className={( {isActive}) => (isActive ? styles.active : "")}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

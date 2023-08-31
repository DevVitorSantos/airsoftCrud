
import styles from './MenuBurger.css'
import { useState } from 'react'

import { NavLink } from 'react-router-dom';

import { useAutentication } from '../hooks/useAutentication'
import { useAuthValue } from '../context/AuthContext'



const MenuBurger = () => {

    const { user } = useAuthValue() 
    const { logout } = useAutentication()


    const [ isOpen , setIsOpen ] = useState(false)
    

    const handleOpen = () => {
        setIsOpen( ( current) => !current) 
    }
    

    return (
        <div className='menuBurger-container'>
        <a onClick={handleOpen} className='menu-ico'>  </a>

            <div className={`hamburguer ${isOpen ? "hamburguer-open" : ""}`}>
                <a className="hamburguer-fechar" onClick={handleOpen} > </a>
                <div>
                    <NavLink to='/' className='logo' 
                    onClick={handleOpen}>
                
                        <img src="https://www.vitoriaparkshopping.com/wp-content/uploads/2020/01/logo-airsoft.png" alt="" />
                    </NavLink>
                </div>
                <hr />
                <div className='lista-burger'>
                    <ul className=''>
                            <li>
                            <NavLink to='/'
                                className={( {isActive}) => (isActive ? styles.active : "")}
                                onClick={handleOpen}>
                                Home
                            </NavLink>
                            </li>

                            <li>
                                <NavLink to='/tutorial'
                                    className={( {isActive}) => (isActive ? styles.active : "")}
                                    onClick={handleOpen}>
                                    Tutorial
                                </NavLink>
                            </li>

                            <li>
                            <NavLink to='/sobre'
                                className={( {isActive}) => (isActive ? styles.active : "")}
                                onClick={handleOpen}>
                                Sobre
                            </NavLink>
                            </li>

                            { user && (
                            <>
                                <li>
                                <NavLink to='/dashboard'
                                className={( {isActive}) => (isActive ? styles.active : "")}
                                onClick={handleOpen}>
                                    Dashboard
                                </NavLink>
                                </li>

                                <li onClick={handleOpen}>
                                    <a onClick={logout}>Sair</a>
                                </li>
                            
                            </>
                            
                            )}
                            
                            {!user && (
                                <li>
                                <NavLink to='/login'
                                    className={( {isActive}) => (isActive ? styles.active : "")}
                                    onClick={handleOpen}>
                                    Login
                                </NavLink>
                                </li>
                            )}
                            
                            <span className='menuBurger-userImage' >
                                <img src={user ? ( user.photoURL )  : 'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-12.jpg'} alt="" />
                            </span>

       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuBurger
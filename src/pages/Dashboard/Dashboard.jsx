
import React from 'react'
import { NavLink } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext'

const Dashboard = () => {

  const { user } = useAuthValue() 

  return (
    <div className='dashboard-container'>
      <h2>{user && user.displayName },<br/> conheça seu dashboard</h2>
      <p>Aqui você terá controle de todas as suas atividades, eventos e relatórios</p>
      <NavLink to='/games/create'
          className='btn'>
            Criar Game
      </NavLink>
    </div>
  )
}

export default Dashboard

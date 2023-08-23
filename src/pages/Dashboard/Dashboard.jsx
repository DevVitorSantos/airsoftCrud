
import React from 'react'
import { NavLink } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext'
import { useFechdocuments } from '../../hooks/useFechdocuments'

const Dashboard = () => {

  const { user } = useAuthValue() 
  const uid = user.uid
  const {documents: eventos} = useFechdocuments("eventosAirsoft", null, uid)

  console.log('eventos dashboard' , eventos )

  return (
    <div className='dashboard-container'>
      <h2>{user && user.displayName },<br/> conheça seu dashboard</h2>
      <p>Aqui você terá controle de todas as suas atividades, eventos e relatórios</p>

      

      <NavLink to='/games/create'
          className='btn'>
            Criar Game
      </NavLink>

      <div>
        {eventos && eventos.map( (evento) => (
          <p key={evento.id}>{evento.nomeEvento}</p>
          
        ))}
      </div>
    </div>
  )
}

export default Dashboard

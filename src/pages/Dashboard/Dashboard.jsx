import styles from './Dashboard.css'

import React from 'react'
import { NavLink } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext'
import { useFechdocuments } from '../../hooks/useFechdocuments'

import Banner from '../../components/Banner'
import GridDashboard  from '../../components/GridDashboard';

const Dashboard = () => {

  const { user } = useAuthValue() 
  const uid = user.uid
  const {documents: eventos} = useFechdocuments("eventosAirsoft", null, uid)

  console.log('eventos dashboard' , eventos )

  return (
    <div className='dashboard-container'>

      <Banner titulo={'Dashboard , ' + user.displayName} descricao={'Pronto para gerenciar seus eventos?'}/>

      <div className="controller">
        <div className="controller-data">
          <h3>Dados de Faturamento Geral</h3>
        </div>
        <div className="controller-access">
          <h3>Acessos Rápidos</h3>

          <NavLink to='/games/create'
            className='btn'>
            Criar Game
          </NavLink>
        </div>
      </div>


      

      

      <div className='container'>
        {eventos && eventos.map( (evento) => (
          
          <GridDashboard evento={evento}/>
        ))}
      </div>
    </div>
  )
}

export default Dashboard

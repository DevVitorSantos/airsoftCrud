import styles from './Dashboard.css'

import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext'
import { useFechdocuments } from '../../hooks/useFechdocuments'

import Banner from '../../components/Banner'
import GridDashboard  from '../../components/GridDashboard';

const Dashboard = () => {

  const { user } = useAuthValue() 
  const uid = user.uid
  const email = user.email
  const {documents: eventosGerais, loading} = useFechdocuments("eventosAirsoft")
  const {documents: eventos} = useFechdocuments("eventosAirsoft", null, uid)
  const [ eventosInscrito , setEventosInscrito ] = useState('')
  //const {documents: eventosParticipo} = useFechdocuments("eventosAirsoft", null, null, email)

  //console.log('eventos dashboard' , eventos )
  
  useEffect( () => {
    const filteredObjects = eventosGerais && eventosGerais.filter(item => {
      
  
      // Verifica o email nos participantes
      const hasParticipantWithEmail = item.participantes.some(
        participant => participant.email === email
      );
  
      return hasParticipantWithEmail;
    })

    setEventosInscrito(filteredObjects)
  },[eventosGerais])

  
   
  
  
  
  


  
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
        <h3>Eventos que estou Inscrito</h3>
        <p>Espaço separado para listar os eventos que você se inscreveu como 
          participante
        </p>
        
        
        {eventosInscrito && eventosInscrito.map( (evento) => (
          <GridDashboard evento={evento} key={evento.id} eventosInscrito={eventosInscrito}/>
          
        ))}
      

        
      </div>

      <hr />

      <div className='container'>
      <h3>Eventos que criei</h3>
      <p>Espaço separado para listar os eventos criou como organizador
        </p>
        
        {eventos && eventos.map( (evento) => (
          <GridDashboard evento={evento} key={evento.id}/>
          
        ))}
        
      </div>
    </div>
  )
}

export default Dashboard

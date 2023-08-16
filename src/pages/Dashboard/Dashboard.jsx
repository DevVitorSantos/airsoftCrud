
import React from 'react'

import { useAuthValue } from '../../context/AuthContext'

const Dashboard = () => {

  const { user } = useAuthValue() 

  return (
    <div>
      <h2>{user && user.displayName },<br/> conheça seu dashboard</h2>
      <p>Aqui você terá controle de todas as suas atividades, eventos e relatórios</p>
    </div>
  )
}

export default Dashboard

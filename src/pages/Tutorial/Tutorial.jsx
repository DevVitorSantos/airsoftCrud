import Banner from '../../components/Banner'
import styles from './Tutorial.css'
import React from 'react'

const Tutorial = () => {
  return (

    <div className='tutorial-container'>
      <Banner titulo={'Tutorial'}/>
      <h2>Seja bem vindo ao tutorial</h2>
      <p> Abaixo conteúdo explicando passo a passo como utilizar a plataforma, Aguardo vocês por lá</p>
      <iframe  src="https://www.youtube.com/embed/H07CJoxAmps?si=7EZxO7cpVe1iRlAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Tutorial

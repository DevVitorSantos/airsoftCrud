import styles from './CreateGame.css'

import { useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertdocument } from '../../hooks/useInsertDocument'
import data from './data'

  // msg global setup

import { Context } from '../../App'

const CreateGame = () => {

  /* create form inputs spaces */
  const [nomeEvento, setNomeEvento] = useState("")
  const [descricaoEvento, setDescricaoEvento] = useState("")
  const [imgEvento, setImgEvento] = useState("")
  const [nomeDoCampo, setNomeDoCampo] = useState("")
  const [linkGrupoWpp, setLinkGrupoWpp] = useState("")
  const [statusEvento, setStatusEvento] = useState("")
  const [tags, setTags] = useState([])
  const [participantes, setParticipantes] = useState([])

  const [msgGlobal, setMsgGlobal]    = useContext(Context)
  
  const [formError, setFormError] = useState("")

  // extract hook db and create a table
  const { insertDocument, response} = useInsertdocument("eventosAirsoft")

  // extract user info
  const {user} = useAuthValue()

  // extract use navigate for redirect
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")
  
     // validate image
     try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!nomeEvento || !imgEvento || !tags || !descricaoEvento) {
      setFormError("Por favor, preencha todos os campos!");
    }

    insertDocument( {
      nomeEvento,
      descricaoEvento,
      imgEvento,
      linkGrupoWpp,
      nomeDoCampo,
      uid: user.uid,
      createdBy: user.displayName,
      emailResponsavel: user.email,
      participantes: [],
      tags: tagsArray
    })

    setMsgGlobal({
      tipo: 'Success',
      msg: 'Jogo criado com sucesso'
    })

    // redirect to home page
    navigate("/dashboard")
    
  }

 
  {/* 

  useEffect( () => {
    data.map( item => {
      insertDocument( {
        nomeEvento: item.nomeEvento,
        descricaoEvento: item.descricaoEvento,
        imgEvento: item.imgEvento,
        linkGrupoWpp: item.linkGrupoWpp,
        nomeDoCampo: item.nomeDoCampo,
        uid: user.uid,
        createdBy: user.displayName,
        emailResponsavel: user.email,
        participantes: [],
        tags: item.tags
      })
    })
  }, [])
  console.log('consigo ver data? ' , data)
  */}


  return (
    <div className='createPost-container'>
      <h2>Crie seu Game</h2>
      <p>Escreva os detalhes para que o público conheça seu trabalho</p>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Nome do Evento:</span>
          <input 
            type="text"
            name='nomeEvento'
            placeholder='Coloque o nome do evento '
            onChange={(e) => setNomeEvento(e.target.value)}
            value={nomeEvento} />
          </label>

          <label>
            <span>Descrição do Evento:</span>
            <textarea
              name="descricaoEvento"
              placeholder='Crie uma descrição de como acontecera seu evento'
              onChange={(e) => setDescricaoEvento(e.target.value)}
              value={descricaoEvento}
            />
          </label>

          <label>
            <span>Imagem do Evento:</span>
            <input 
              type="text"
              name='imgEvento'
              placeholder='Coloque a imagem do evento '
              onChange={(e) => setImgEvento(e.target.value)}
              value={imgEvento} 
            />
          </label>

          <label >
          <span>Preview da Imagem:</span>
            <img src={imgEvento} ></img>
          </label>

          <label>
            <span>Link do Grupo de Whatsapp:</span>
            <input 
              type="text"
              name='linkGrupoWpp'
              placeholder='Link do Grupo de Whatsapp'
              onChange={(e) => setLinkGrupoWpp(e.target.value)}
              value={linkGrupoWpp} 
            />
          </label>

          <label>
            <span>Nome do Campo de Airsoft:</span>
            <input 
              type="text"
              name='nomeDoCampo'
              placeholder='Link do Grupo de Whatsapp'
              onChange={(e) => setNomeDoCampo(e.target.value)}
              value={nomeDoCampo} 
            />
          </label>
         

          <label>
            <span>Altere o Status para publicar o evento:</span>
            <select 
              name={statusEvento}
              defaultValue={'Pausado'}
              onChange={ (e) => setStatusEvento(e.target.value)}
              >
              <option value="Publicado">Publicado</option>
              <option value="Pausado">Pausado</option>
              <option value="Encerrado">Encerrado</option>
            </select>

            
          </label>

          <label>
            <span>Tags para facilitar a busca:</span>
            <input 
              type="text"
              name='tags'
              placeholder='tags separadas por virgula'
              onChange={(e) => setTags(e.target.value)}
              value={tags} 
            />
          </label>

        <button className='btn'>Enviar</button>
      </form>
    </div>
  )
}

export default CreateGame



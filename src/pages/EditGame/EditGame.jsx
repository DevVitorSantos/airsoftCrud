import styles from './EditGame.css'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocument } from '../../hooks/useFechDocument'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'



const EditGame = () => {
    const { id } = useParams()
    const { document: evento } = useFetchDocument( 'eventosAirsoft', id)
    const { updateDocument, response } = useUpdateDocument("eventosAirsoft");

    //console.log( 'cade nosso evento? ' , evento)

  // extract user info
  const {user} = useAuthValue()

  // extract use navigate for redirect
  const navigate = useNavigate()

    /* create form inputs spaces */
  const [nomeEvento, setNomeEvento] = useState("")
  const [descricaoEvento, setDescricaoEvento] = useState("")
  const [imgEvento, setImgEvento] = useState("")
  const [nomeDoCampo, setNomeDoCampo] = useState("")
  const [linkGrupoWpp, setLinkGrupoWpp] = useState("")
  const [statusEvento, setStatusEvento] = useState("")
  const [tags, setTags] = useState([])
  const [participantes, setParticipantes] = useState([])

  const [formError, setFormError] = useState("");

  useEffect( () => {
    if(evento){
        setNomeEvento(evento.nomeEvento)
        setDescricaoEvento(evento.descricaoEvento)
        setImgEvento(evento.imgEvento)
        setNomeDoCampo(evento.nomeDoCampo)
        setLinkGrupoWpp(evento.linkGrupoWpp)
        setStatusEvento(evento.statusEvento)

        const textTags = evento.tags.join(", ")
        setTags(textTags)
    }

  },[evento])

  const handleSubmit = (e) =>{
    e.preventDefault()


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

      const data =  {
        nomeEvento,
        descricaoEvento,
        imgEvento,
        linkGrupoWpp,
        nomeDoCampo,
        uid: user.uid,
        createdBy: user.displayName,
        emailResponsavel: user.email,
        participantes,
        tags: tagsArray
      }

      updateDocument(id, data)

    // redirect to home page
     navigate("/dashboard");
      
  }


    return (
    <div className='editGame-container'>
      <h2>Edite seu Game</h2>
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

export default EditGame
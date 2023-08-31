
import styles from './ViewGame.css'

// hooks
import React,{ useState, useEffect, useContext } from "react"
import { useFetchDocument } from "../../hooks/useFechDocument"
import { useParams,useNavigate } from "react-router-dom"
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import { useAuthValue } from '../../context/AuthContext'


//components
import Banner from '../../components/Banner';

// msg global setup

import { Context } from '../../App'






const ViewGame = () => {

    const { id } = useParams();
    const {document: evento} = useFetchDocument("eventosAirsoft", id)
    const { updateDocument, response } = useUpdateDocument("eventosAirsoft")
    const [msgGlobal, setMsgGlobal]    = useContext(Context)

    const navigate = useNavigate()
    
    //console.log('trouxe meu evento' ,  evento)


    // extract user info
    const {user} = useAuthValue()
   

    /* create form inputs spaces */
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    //console.log(user)
    // fill automatic form
    useEffect( () => {
        setName(user && user.displayName)
        setEmail(user && user.email)
    },[user])


    const handleSubmit = (e) => {
        e.preventDefault()

         

        const data = {
            nomeEvento: evento.nomeEvento,
            participantes: [...evento.participantes , 
                {
                    name: name,
                    email: email,
                    user: user.uid
                }
            ]
            
        }

        
        updateDocument(id, data)

        setMsgGlobal({
            tipo: 'Success',
            msg: 'Você se inscreveu no evento com sucesso'
          })

        
        
        // redirect to home page
        navigate("/dashboard")
    }   

    return(
        <>
        <Banner titulo={evento && evento.nomeEvento} />
        <div className='viewgame-container'>
            

            {!evento ? 
            
                <div>
                    <p>Estamos sem evento</p>
                </div>
            : 
            
                <div className='viewgame-container'>
                    <h3>{evento.nomeEvento}</h3>

                    <img src={evento.imgEvento}
                        alt={evento.nomeEvento} />

                    <div className="box">
                        <div className="tags">
                            {evento.tags.map( tag => (
                                <p key={tag}>
                                    <span>#</span> {tag},
                                </p>
                            ))}
                        </div>

                        <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Nome:
                                        <input type="text" 
                                            name={name} 
                                            value={user && name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='Digite seu nome'/>
                                    </label>
                                    <label>
                                        Email:
                                        <input type="email" 
                                            name={email} 
                                            value={user && email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Digite seu email'/>
                                    </label>

                                    <button> Cadastrar no Evento</button>
                                </form>
                        </div>

                    </div>
                    

                    
                    <p className='descricao'>{evento.descricaoEvento}</p>

                    <hr />
                    <p> <strong>Nome do Responsável:</strong> {evento.emailResponsavel}</p>
                    <p><strong>Link do Wpp:</strong> {evento.linkGrupoWpp}</p>
                    <p><strong>Nome do Campo:</strong> {evento.nomeDoCampo}</p>
                </div> 
            }


            
            
            
        </div>
        </>
    )
}

export default ViewGame
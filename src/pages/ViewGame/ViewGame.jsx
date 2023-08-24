
import styles from './ViewGame.css'

// hooks
import { useFetchDocument } from "../../hooks/useFechDocument"
import { useParams } from "react-router-dom"
import Banner from '../../components/Banner';



const ViewGame = () => {

    const { id } = useParams();
    const {document: evento} = useFetchDocument("eventosAirsoft", id)

    console.log('trouxe meu evento' ,  evento)

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

                    <div className="tags">
                        {evento.tags.map( tag => (
                            <p key={tag}>
                                <span>#</span> {tag},
                            </p>
                        ))}
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
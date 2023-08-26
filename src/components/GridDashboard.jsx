import styles from './GridDashboard.css'
import { Link  } from 'react-router-dom'

const GridDashboard = ({evento}) => {
    return (
        <div className="grid-Dashboard-container">
            <div>
                <h2>{evento.nomeEvento}</h2>
                <p>Local do Evento: {evento.nomeDoCampo}</p>
                <p>Quantidade de Participantes: {evento.participantes.length}</p>
            </div>
            


            <div>
                <Link to={`/eventos/gerenciar/${evento.id} `} className="">
                    Gerenciar |
                </Link>
                
                <Link to={`/eventos/edit/${evento.id} `} className="">
                    Editar |
                </Link>
                
                <Link to={`/eventos/view/${evento.id} `} className="">
                    Ir página do Evento
                </Link>
                
            </div>
        </div>
    )
}

export default GridDashboard
import styles from './GerenciarGame.css'

import { useParams,useNavigate, NavLink } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFechDocument"
import { useAuthValue } from '../../context/AuthContext'

//components
import Banner from '../../components/Banner';
import GridGerenciar from '../../components/GridGerenciar';

const GerenciarGame = () => {

    const { id } = useParams();
    const navigate = useNavigate()

    // extract user info
    const {user} = useAuthValue()

    // extract event
    const {document: evento} = useFetchDocument("eventosAirsoft", id)

    //console.log('chegou meu evento', evento)

    return(
        <div className='dashboard-container'>

            <Banner titulo={'Gerenciar Evento , '} descricao={'Pronto para gerenciar seus eventos?'}/>

            <div className="controller">
                <div className="controller-data">
                <h3>Dados de Faturamento Geral</h3>
                <p>Número de participantes: {evento && evento.participantes.length}</p>
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
            {!evento && <p>Não temos evento </p>}
            
            {evento && evento.participantes.map( (participante) => (
                <GridGerenciar participante={participante} key={participante.id}/>
            ))}
        </div>
    </div>
    )
}

export default GerenciarGame
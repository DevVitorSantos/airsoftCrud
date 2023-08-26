import styles from './GridDashboard.css'
import { Link  } from 'react-router-dom'

const GridGerenciar = ({participante}) => {
    return (
        <div className="grid-Dashboard-container">

            { participante && 
            <>
                <div>
                    <h2>{participante.name}</h2>
                    <p>email: {participante.email}</p>
                
                </div>
            


            <div>
                <Link to={`/dashboard `} className="">
                    xxxxx |
                </Link>
                
                <Link to={`/dashboard `} className="">
                    xxxxxx 
                </Link>
                
                
                
            </div>
            </>
            }
            
        </div>
    )
}

export default GridGerenciar
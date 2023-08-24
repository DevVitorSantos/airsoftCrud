import styles from './Card.css'

import { useNavigate, Link } from "react-router-dom"

const Card = ({ evento }) => {
    return(
        <div className="grid-card">
              <p key={evento.id}>{evento.nomeEvento}</p>

              <Link to={`/eventos/view/${evento.id} `} className="btn btn-outline">
                Ver Evento
              </Link>

              
              
          </div>
    )
}

export default Card
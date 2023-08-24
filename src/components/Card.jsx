import styles from './Card.css'

import { useNavigate, Link } from "react-router-dom"

const Card = ({ evento }) => {
    return(
        <div className="grid-card" key={evento.id}>
              <h3>{evento.nomeEvento}</h3>
              <img src={evento.imgEvento} alt={evento.nomeEvento} />

              <Link to={`/eventos/view/${evento.id} `} className="btn btn-outline">
                Ver Evento
              </Link>

              
              
          </div>
    )
}

export default Card
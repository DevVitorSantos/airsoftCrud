
import styles from './ViewGame.css'

// hooks
import { useFetchDocument } from "../../hooks/useFechDocument"
import { useParams } from "react-router-dom"



const ViewGame = () => {

    const { id } = useParams();
    const {document: evento} = useFetchDocument("eventosAirsoft", id)

    console.log('trouxe meu evento' ,  evento)

    return(
        <div> View Game - {id} - {evento && evento.createdBy }</div>
    )
}

export default ViewGame
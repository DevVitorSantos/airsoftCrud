import styles from './Search.css'
import { useState } from 'react'

// hooks
import { useFechdocuments } from '../../hooks/useFechdocuments'
import { useQuery } from '../../hooks/useQuery'

//components
import { Link } from 'react-router-dom'



const Search = () => {
    const query = useQuery()
    const search = query.get("q")
    const [ eventosSelecionados,  setEventosSelecionados] = useState([])

    const {documents: eventos} = useFechdocuments("eventosAirsoft", search)

   

    return (
        <div>
            <h2> seja bem vindo </h2>
            <p>sua busca foi == {search}</p>

            <div>
                {eventos && eventos.map( (evento) => (
                 <p key={evento.id}>{evento.nomeEvento }</p>
          
                ))}

            </div>
        </div>
    )
}

export default Search
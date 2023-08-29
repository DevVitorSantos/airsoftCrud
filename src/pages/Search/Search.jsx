import styles from './Search.css'
import { useState } from 'react'

// hooks
import { useFechdocuments } from '../../hooks/useFechdocuments'
import { useQuery } from '../../hooks/useQuery'


import { Link } from 'react-router-dom'


// components
import Banner from '../../components/Banner'
import Card from '../../components/Card'



const Search = () => {
    const query = useQuery()
    const search = query.get("q")
    const [ eventosSelecionados,  setEventosSelecionados] = useState([])

    const {documents: eventos} = useFechdocuments("eventosAirsoft", search)

   

    return (
        <div>
            <Banner titulo={'Configura sua Busca'} />

            <div>
                {!eventos  && (
                    <p>Não foram encontrados conteúdos com a sua busca - {search}</p>
                )}
            </div>

            <div className='grid-search'>
                {eventos && eventos.map( (evento) => (
                    <Card evento={evento} key={evento.id}/>
                 
          
                ))}

            </div>
        </div>
    )
}

export default Search
import styles from './Home.css'

// components
import Banner from '../../components/Banner'
import Card from '../../components/Card'

// hooks import
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { useFechdocuments } from "../../hooks/useFechdocuments"




const Home = () => {
  const [ query, setQuery] = useState('')

  const {documents: eventos, loading} = useFechdocuments("eventosAirsoft")
  const navigate = useNavigate()

  
  

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(query){
      return navigate(`/search?q=${query}`)
    }
  }


  return (
    <div className='home-container'>
      
     <Banner titulo={'Home Page'} descricao={'Veja mais sobre nossos produtos'}/>
      
     
      <div className="form-container">
        <form onSubmit={handleSubmit} className='home-form'>
          <input 
            type="text"
            placeholder="Ou busque por Tags..."
            onChange={(e) => setQuery(e.target.value)}/>

          <button className="btn btn-dark">
            Pesquisar
          </button>
        </form>
        <div>
          Campos mais buscados: Arena B13 , CT Fantasma
        </div>

      </div>
      


      

      <div className='grid-home'>
        {loading && <p>Carregando...</p>}
        {eventos && eventos.map( (evento) => (
          
            <Card evento={evento} key={evento.id}/> 
        ))}

        {eventos && eventos.length === 0 && (
          <div className=''> 
            <p>Não foram encontrados Eventos</p>
            <Link 
              to="/dashboard"
              className="btn">
                Criar primeiro evento
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

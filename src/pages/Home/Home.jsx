import styles from './Home.css'

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
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
     
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input 
          type="text"
          placeholder="Ou busque por Tags..."
          onChange={(e) => setQuery(e.target.value)}/>

        <button className="btn btn-dark">
          Pesquisar
        </button>
      </form>


      

      <div>
        {loading && <p>Carregando...</p>}
        {eventos && eventos.map( (evento) => (
          <p key={evento.id}>{evento.nomeEvento}</p>
          
        ))}

        {eventos && eventos.length === 0 && (
          <div className={styles.noposts}> 
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

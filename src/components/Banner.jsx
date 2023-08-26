import styles from './Banner.css'

const Banner = ({ titulo, descricao}) => {
    return(
        <div className="banner">
            <img src="https://www.vitoriaparkshopping.com/wp-content/uploads/2020/01/logo-airsoft.png" alt="" />
            <div>
            <h2>{titulo} </h2>
            <p> {descricao}</p>
            
            </div>
      </div>

    )
}

export default Banner
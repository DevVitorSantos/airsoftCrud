import styles from './Banner.css'

const Banner = ({ titulo, descricao}) => {
    return(
        <div className="banner">
            <img src="https://images.unsplash.com/photo-1610165539750-051008c3e799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            <div>
            <h2>{titulo} </h2>
            <p> {descricao}</p>
            <p> lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum</p>
            </div>
      </div>

    )
}

export default Banner
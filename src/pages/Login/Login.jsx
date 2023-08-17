import styles from './Login.css'

import { useState, useEffect } from 'react'
import { HookUseAutentication } from '../../hooks/useAutentication'

const Login = () => {

  const [ error, setError ] = useState()
  const {
    auth,
    error: authError,
    loading,
    tryLoginwithGoogle,
    logout
  } = HookUseAutentication()


  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])


  return (
    <div className='login-container'>
      <h2>Faça seu login</h2>
      <p>Faça o login para poder utilizar o sistema</p>

      {error && <p className='error'>{error}</p>}
      {!loading && 
        <a className='btn' onClick={tryLoginwithGoogle}>Login Google</a>
        }
    </div>
  )
}

export default Login

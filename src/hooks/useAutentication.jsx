import {db} from '../firebase/firebase.jsx'
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAutentication = () => {
  
  const [ error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  // deal with momory leak
  const [ cancelled, setCancelled] = useState(null)

  const auth = getAuth()

  function checkIfIsCancelled(){
    if(cancelled){
      return
    }
  }

  const tryLoginwithGoogle = async() => {
    checkIfIsCancelled()
    setError(null)
    setLoading(true)

    const provider = new GoogleAuthProvider()

    try {
      const {user} = await signInWithPopup( auth,provider)
      setLoading(false)
      //console.log(user)
      return user

    } catch (error) {
      let systemErrorMessage
      setError(systemErrorMessage)
    }
  }

  // user logout
  const logout = () => {
    checkIfIsCancelled()
    signOut(auth)
  }
  
  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return {
    auth,
    error,
    loading,
    tryLoginwithGoogle,
    logout
  }
}



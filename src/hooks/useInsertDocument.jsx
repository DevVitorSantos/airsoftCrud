import {useState, useEffect, useReducer} from 'react'
import { db } from '../firebase/firebase'
import { collection, addDoc, Timestamp, doc } from 'firebase/firestore'


/*  inicial state to help control */

const initialState = {
  loading: null,
  error: null
}

const insertReducer = ( state, action ) => {
  switch (action.type) {
    case "LOADING":
      return {loading: true, error:null}
    case "INSERTED_DOC":
      return {loading: false, error:null} 
    case "ERROR":
      return {loading: false, error:action.payload} 
    defaul:
      return state;
  }
}

export const useInsertdocument = (docCollection) => {
  const [ response, dispatch ] = useReducer(insertReducer, initialState)

  //deal with memory leak
  const [cancelled, setCancelled] = useState(false)

  const checkCancelBeforeDispatch = (action) => {
    if(!cancelled){
      dispatch(action)
    }
  }

  /* start firebase insert */

  const insertDocument = async(document) => {
    checkCancelBeforeDispatch({
      type: "LOADING"
    })

    try {
      
      const newDocument = {...document , createdAt: Timestamp.now()}
      const insertedDocument = await addDoc(
        collection(db, docCollection), newDocument
      )

      /* change status */

      checkCancelBeforeDispatch({
        type: "INSERTED_DOC",
        payload: insertedDocument
      })


    } catch (error) {
      
      /*  call an error  */
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message
      })

    }

  }

  // memory leak again
  useEffect( () => {
    return () => setCancelled(true)
  },[])

  return { insertDocument, response}

}



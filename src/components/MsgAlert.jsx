import styles from './MsgAlert.css'
import React, { useContext, useState} from 'react'
import { Context } from '../App'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const MsgAlert = () => {

 const [ msgGlobal, setMsgGlobal ] = useContext(Context)

 if(msgGlobal && msgGlobal.tipo === 'Error' ){
    toast.error(msgGlobal? msgGlobal.msg : 'Error Sorry!') 
  
   }else if(msgGlobal && msgGlobal.tipo === 'Success' ){
    toast.success(msgGlobal? msgGlobal.msg : 'Successfully created!')
   }

  return (
    <div className='msg-container'>

      <ToastContainer />
    </div>
  )
}

export default MsgAlert

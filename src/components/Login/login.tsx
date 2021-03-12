import React, { useState } from 'react'
import { connect } from 'react-redux'
import style from './login.module.css'
import { Cookies } from 'react-cookie';
import axios from 'axios'
import {addUser} from '../../actions/userActions'
const cookies = new Cookies();
const Login = async (name, password, addUser, setModal) => {
  console.log(name, password)
  let response = await axios('http://localhost:3000/user/login', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: {name, password}
  })
  let token = await response.data
  addUser(name, token)
  setModal(false)
  console.log(token)
}
export const login = ({userReducer, addUser, setModal}) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  
  console.log(userReducer)
  return (
    <div className={style.container}>
      <div className={style.title}>INICIAR SESSION</div>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="INGRESA TU NOMBRE" className={style.input} type="text"/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="INGRESA TU PASSWORD" className={style.input} type="password"/>
      <div className={style.button} onClick={()=> Login(name, password, addUser, setModal)}>Iniciar session</div>
    </div>
  )
}

const mapStateToProps = ({userReducer}) => ({
  userReducer
})

const mapDispatchToProps = {
  addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(login)

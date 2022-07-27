import './Form.css'
import { Button } from '../../atoms/Button/Button'
import { useState } from 'react'
import db from '../../../database/Database.json'
import { Link } from 'react-router-dom'

export default function Form({ navigateFunction, locationFunction }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorPwd, setErrorPwd] = useState('')
  const [err, setErr] = useState('')

  const handleSubmit = () => {
    const users = db.user.map((x) => x.email)
    const pwds = db.user.map((x) => x.password)
    setErrorUser('')
    setErrorPwd('')
    setErr('')
    if (!email) {
      setErrorUser('Campo es requerido')
    }
    if (!password) {
      setErrorPwd('Campo es requerido')
    }
    if (users.includes(email) && pwds.includes(password)) {
      navigateFunction('/home')
    } else {
      setErr('Los datos son incorrectos')
    }
  }
  return (
    <form className="userForm">
      <label htmlFor="userEmail">Correo electronico</label>
      <input
        onChange={(ev) => setEmail(ev.target.value)}
        type="text"
        id="userEmail"
        value={email}
        placeholder="Ej. name@example.com"
      />
      <span>{errorUser}</span>
      <br></br>
      <label htmlFor="userPassword">Contraseña</label>
      <input
        onChange={(ev) => setPassword(ev.target.value)}
        type="password"
        name="password"
        id="userPassword"
        value={password}
        placeholder="*****"
      />
      <span>{errorPwd}</span>
      <br></br>
      <div className="optionRegister">
        <Link to={'/register'}> Registrate aquí </Link>
        <Button size="small" onClick={() => handleSubmit()} color="primary">
          Ingresar
        </Button>
      </div>
      <span>{err}</span>
    </form>
  )
}

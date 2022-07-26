import React, { useEffect } from 'react'
import { Input } from '../../components/atoms/Input/Input'
import { Button } from '../../components/atoms/Button/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserService } from '../../services/user.service'
import './Login.css'

export const Login = ({ navigateFunction, locationFunction }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorPwd, setErrorPwd] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    if (email.length <= 5 && email.length > 0) {
      setErrorUser('Minimo 5 caracteres')
    } else {
      setErrorUser('')
    }
    if (password.length <= 5 && email.length > 0) {
      setErrorPwd('Minimo 5 caracteres')
    } else {
      setErrorPwd('')
    }
  }, [email, password])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErr('')
    const userData = { username: email, password: password }
    try {
      const dataUser = await UserService.login(userData)
      if (dataUser) {
        localStorage.setItem('token', dataUser.access_token)
        localStorage.setItem('typeToken', dataUser.tokenType)
        navigateFunction('/home')
      } else {
        setErr('Los datos son incorrectos')
      }
    } catch (error) {
      setErr('Ha ocurrido un error.')
    }
  }

  return (
    <div className="Login">
      <main className="Login-header">
        <h1> Iniciar sesión </h1>
        <form className="userForm">
          <Input
            onChange={(ev) => setEmail(ev.target.value)}
            type="text"
            id="userEmail"
            value={email}
            placeholder="Ej. name@example.com"
            labelMessage="Correo electronico"
            errorMessage={errorUser}
          />

          <Input
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
            name="password"
            id="userPassword"
            value={password}
            placeholder="*****"
            errorMessage={errorPwd}
            labelMessage="Contraseña"
          />

          <div className="optionRegister">
            <Link to={'/register'}> Registrate aquí </Link>
            <Button size="small" onClick={(event) => handleSubmit(event)} color="primary">
              Ingresar
            </Button>
          </div>
          <span>{err}</span>
        </form>
      </main>
    </div>
  )
}

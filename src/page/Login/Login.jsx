import React, { ChangeEvent, useEffect, useState } from 'react'
import { Input } from '../../components/atoms/Input/Input'
import { Button } from '../../components/atoms/Button/Button'
import { Link } from 'react-router-dom'
import { UserService } from '../../services/user.service'
import './Login.scss'

export function Login({ navigateFunction }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorPwd, setErrorPwd] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    setErr('')
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

  const handleSubmit = async () => {
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
      <main className="Login__header">
        <h1 className="Login__title"> Iniciar sesión </h1>
        <form className="Login__user-form">
          <Input
            onChange={(ev) => setEmail(ev.target.value)}
            type="text"
            id="userEmail"
            value={email}
            placeholder="Ej. name@example.com"
            labelMessage="Correo electronico"
            errorMessage={errorUser}
            className="inputLogin"
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
            className="inputLogin"
          />
          <br></br>
          <div className="Login__option-register">
            <Link to={'/register'}> Registrate aquí </Link>
            <Button size="small" onClick={() => void handleSubmit()} color="primary">
              Ingresar
            </Button>
          </div>
          <span className="Login__span">{err}</span>
        </form>
      </main>
    </div>
  )
}

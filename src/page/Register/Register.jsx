import React, { useEffect } from 'react'
import { Input } from '../../components/atoms/Input/Input'
import { Button } from '../../components/atoms/Button/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserService } from '../../services/user.service'
import './Register.css'

export const Register = ({ navigateFunction, locationFunction }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pwdConfirm, setPwdConfirm] = useState('')
  const [errPwdConfirm, setErrPwdConfirm] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorPwd, setErrorPwd] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    if (userName.length <= 5 && userName > 0) {
      setErrorUser('Minimo 5 caracteres')
    } else {
      setErrorUser('')
    }
    if (email.length <= 5 && email.length > 0) {
      setErrorEmail('Minimo 5 caracteres')
    } else {
      setErrorEmail('')
    }
    if (password.length <= 5 && password.length > 0) {
      setErrorPwd('Campo requerido, minimo 5 caracteres')
    } else {
      setErrorPwd('')
    }
    if (pwdConfirm.length <= 5 && pwdConfirm.length > 0) {
      setErrPwdConfirm('Campo requerido, minimo 5 caracteres')
    } else {
      setErrPwdConfirm('')
    }
  }, [userName, email, password, pwdConfirm])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErr('')
    try {
      const dataRegister = await UserService.register(userName, email, password)
      if (dataRegister) {
        navigateFunction('/')
      } else {
        setErr('Los datos son incorrectos')
      }
    } catch (error) {
      setErr('Ha ocurrido un error.')
    }
  }

  return (
    <>
      <div className="Register">
        <main className="Register-header">
          <h1>Registrarse </h1>
          <form className="registerForm">
            <Input
              onChange={(ev) => setUserName(ev.target.value)}
              type="text"
              id="userName"
              value={userName}
              placeholder="Ej. name@example.com"
              labelMessage="Usuario"
              errorMessage={errorUser}
            />
            <br></br>
            <Input
              onChange={(ev) => setEmail(ev.target.value)}
              type="text"
              id="email"
              value={email}
              placeholder="Ej. name@example.com"
              labelMessage="Correo electronico"
              errorMessage={errorEmail}
            />
            <br></br>
            <Input
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="*****"
              errorMessage={errorPwd}
              labelMessage="Contraseña"
            />
            <br></br>
            <Input
              onChange={(ev) => setPwdConfirm(ev.target.value)}
              type="password"
              name="password"
              id="pwdConfirm"
              value={pwdConfirm}
              placeholder="*****"
              errorMessage={errPwdConfirm}
              labelMessage="Confirmar Contraseña"
            />
            <br></br>
            <div className="optionLogin">
              <Link to={'/'}> Registrate aquí </Link>
              <Button size="small" onClick={(event) => handleSubmit(event)} color="primary">
                Registrar
              </Button>
            </div>
          </form>
        </main>
      </div>
    </>
  )
}

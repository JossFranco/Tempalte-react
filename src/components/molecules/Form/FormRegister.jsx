import './FormRegister.css'
import { Button } from '../../atoms/Button/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FormRegister({ navigateFunction }) {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pwdConfirm, setPwdConfirm] = useState('')
  const [errPwdConfirm, setErrPwdConfirm] = useState('')
  const [errorUser, setErrorUser] = useState('')
  const [errorPwd, setErrorPwd] = useState('')
  const [err, setErr] = useState('')

  const handleSubmit = () => {
    setErrorUser('')
    setErrorEmail('')
    setErrorPwd('')
    setErrPwdConfirm('')
    setErr('')

    if (userName === '') {
      setErrorUser('Campo es requerido')
    }
    if (email === '') {
      setErrorEmail('Campo es requerido')
    }
    if (password === '') {
      setErrorPwd('Campo es requerido')
    }
    if (pwdConfirm === '') {
      setErrPwdConfirm('Campo es requerido')
    }
    if (userName && email && password && pwdConfirm && password === pwdConfirm) {
      navigateFunction('/')
    } else {
      setErr('Las contraseñas no coinciden')
    }
  }
  return (
    <form className="form-register">
      <label className="userName">Nombre de usuario</label>
      <input
        onChange={(ev) => setUserName(ev.target.value)}
        type="text"
        id="userName"
        value={userName}
        placeholder="Ej. name"
      />
      <span>{errorUser}</span>
      <br></br>
      <label className="userEmail">Correo electronico</label>
      <input
        onChange={(ev) => setEmail(ev.target.value)}
        type="text"
        id="userEmail"
        value={email}
        placeholder="Ej. name@example.com"
      />
      <span>{errorEmail}</span>
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
      <label htmlFor="pwdConfirm">Contraseña</label>
      <input
        onChange={(ev) => setPwdConfirm(ev.target.value)}
        type="password"
        name="pwdConfirm"
        id="pwdConfirm"
        value={pwdConfirm}
        placeholder="*****"
      />
      <span>{errPwdConfirm}</span>
      <br></br>
      <div className="optionLogin">
        <Link to={'/'}> Iniciar sesión </Link>
        <Button size="small" onClick={() => handleSubmit()} color="primary">
          Registrar
        </Button>
      </div>
      <span>{err}</span>
    </form>
  )
}

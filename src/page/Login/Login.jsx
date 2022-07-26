import React from 'react'
import Form from '../../components/molecules/Form/Form'
import './Login.css'

export const Login = () => {
  return (
    <>
      <div className="Login">
        <header className="Login-header">
          <h1>Iniciar sesión </h1>
        </header>
        <Form />
      </div>
    </>
  )
}

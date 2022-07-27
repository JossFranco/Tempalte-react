import React from 'react'
import Form from '../../components/molecules/Form/Form'
import './Login.css'

export const Login = ({ navigateFunction, locationFunction }) => {
  return (
    <>
      <div className="Login">
        <main className="Login-header">
          <h1> Iniciar sesión </h1>
          <Form navigateFunction={navigateFunction} locationFuntion={locationFunction}></Form>
        </main>
      </div>
    </>
  )
}

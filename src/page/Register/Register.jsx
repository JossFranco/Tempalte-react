import React from 'react'
import FormRegister from '../../components/molecules/Form/FormRegister'
import './Register.css'

export const Register = ({ navigateFunction, locationFunction }) => {
  return (
    <>
      <div className="Register">
        <main className="Register-header">
          <h1>Registrarse </h1>
          <FormRegister navigateFunction={navigateFunction} locationFunction={locationFunction} />
        </main>
      </div>
    </>
  )
}

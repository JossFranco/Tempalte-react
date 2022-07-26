/* import './FormRegister.css'
import { Button } from '../../atoms/Button/Button'
import { useState } from 'react'
import db from '../../../database/Database.json'

export default function FormRegister() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    const users = db.user.map((x) => x.email)
    const pwds = db.user.map((x) => x.password)
    console.log(pwds, users)
    if (email === users && password === pwds) {
      console.log('ayuda')
    } else {
      alert('Los datos son incorrectos')

      console.log('ingreseee')
    }
  }
  return (
    <form className="userForm" onSubmit={handleSubmit}>
      <label htmlFor="userEmail">Correo electronico</label>
      <input
        onChange={(ev) => setEmail(ev.target.value)}
        type="text"
        id="userEmail"
        value={email}
        placeholder="Ej. name"
      />
      <label htmlFor="userEmail">Correo electronico</label>
      <input
        onChange={(ev) => setEmail(ev.target.value)}
        type="text"
        id="userEmail"
        value={email}
        placeholder="Ej. name@example.com"
      />
      <label htmlFor="userPassword">Contraseña</label>
      <input
        onChange={(ev) => setPassword(ev.target.value)}
        type="password"
        name="password"
        id="userPassword"
        value={password}
        placeholder="*****"
      />
      <label htmlFor="confirmPassword">Confirmar contraseña</label>
      <input
        onChange={(ev) => setPassword(ev.target.value)}
        type="password"
        name="comfirmPassword"
        id="comfirmPassword"
        value={password}
        placeholder="*****"
      />
      <Button onClick={handleSubmit} color="primary">
        Ingresar
      </Button>
    </form>
  )
}
 */

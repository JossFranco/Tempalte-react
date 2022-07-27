import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Login } from './page/Login/Login'
import { Register } from './page/Register/Register'
import { Home } from './page/Home/Home'
import { useNavigate, useLocation } from 'react-router-dom'

export function App() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Routes>
      <Route path="/" element={<Login navigateFunction={navigate} locationFunction={location} />} />
      <Route path="Register" element={<Register />} />
      <Route path="Home" element={<Home />} />
    </Routes>
  )
}

export default App

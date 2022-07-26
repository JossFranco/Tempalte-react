import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './page/Login/Login'
import { Register } from './page/Register/Register'
import { Home } from './page/Home/Home'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

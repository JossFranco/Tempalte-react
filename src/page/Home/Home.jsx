import React from 'react'
import NavBar from '../../components/molecules/NavBar/NavBar'
import './Home.css'
import { GetData } from '../../components/molecules/GetData/GetData'

export const Home = () => {
  return (
    <div>
      <NavBar />
      <GetData />
    </div>
  )
}

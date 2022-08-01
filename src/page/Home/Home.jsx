import React from 'react'
import NavBar from '../../components/molecules/NavBar/NavBar'
import './Home.css'
import { GetData } from '../../components/molecules/GetData/GetData'
import Categories from '../../components/molecules/Categories/Categories'

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Categories />
      <GetData />
    </div>
  )
}

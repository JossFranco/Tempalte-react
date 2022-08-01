import React from 'react'
import './Categories.css'
const Categories = () => {
  return (
    <form className="form-categories">
      <select className="selectCategories">
        <option>Anime</option>
        <option>Ciencia Ficción</option>
        <option>Novelas</option>
        <option>Drama</option>
        <option>Inteligencia Artificial</option>
      </select>
    </form>
  )
}
export default Categories

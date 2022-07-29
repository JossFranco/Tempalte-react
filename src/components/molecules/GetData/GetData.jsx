import React from 'react'
import { useState, useEffect } from 'react'
import './GetData.css'

export const GetData = () => {
  const [name, setName] = useState({})
  const [search, setSearch] = useState('')

  const URL = 'https://cangular-api.herokuapp.com/books/owner/2ac4ly00oen'

  const getBooks = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setName(data)
  }
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  let results = []
  if (!search) {
    results = name
  } else {
    results = name.filter((dato) => dato.name.toLowerCase().includes(search.toLowerCase()))
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <form className="form-search">
        <placeholder className="form-title">Tus libros</placeholder>
        <input
          value={search}
          type="text"
          className="formInput"
          placeholder="🔍 Ej. Angular, React"
          onChange={searcher}
        />
      </form>
      <section>
        <tbody className="card">
          {/*results.map((name) => (
            <tr key={name.id}>
              <td>{name.title}</td>
              <td>{name.image}</td>
            </tr>
          ))*/}
        </tbody>
      </section>
    </>
  )
}

import Axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import './GetData.css'

export const GetData = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const getBooks = async () => {
    try {
      console.log('entro')
      const URL = 'https://cangular-api.herokuapp.com/books/filter'
      const body = {
        title: 'Angular',
        category: [57]
      }
      console.log('debug1')
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      console.log('debog2')
      const response = await Axios.post(URL, body, { headers })
      console.log(response.data.items)
      setBooks(response.data.items)
    } catch (error) {}
  }
  let results = []
  if (!search) {
    results = books
  } else {
    results = books.filter((dato) => dato.title.toLowerCase().includes(search.toLowerCase()))
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <fom className="form-search">
        <placeholder className="form-title">Tus libros</placeholder>
        <input
          value={search}
          type="text"
          className="formInput"
          placeholder="🔍 Ej. Angular, React"
          onChange={searcher}
        />
      </fom>
      <section>
        <tbody className="card">
          {results.map((book) => (
            <tr key={book.id}>
              {/* <td>{book.title}</td>*/}
              <img alt="" className="img-book" src={book.image} />
            </tr>
          ))}
        </tbody>
      </section>
    </>
  )
}

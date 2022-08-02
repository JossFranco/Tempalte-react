/* import Axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Input } from '../../atoms/Input/Input'
import './GetData.css'

export const GetData = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const getBooks = async () => {
    try {
      const URL = 'https://cangular-api.herokuapp.com/books/filter'
      const body = {
        title: '',
        category: []
      }
      const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
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
        <Input
          className="formInput"
          onChange={searcher}
          type="text"
          id="formInput"
          value={search}
          placeholder="🔍 Ej. Angular, React"
          labelMessage="Usuario"
        />
      </fom>
      <section>
        <tbody className="card">
          {results.map((book) => (
            <tr key={book.id}>
              <img alt="" className="img-book" src={book.image} />
            </tr>
          ))}
        </tbody>
      </section>
    </>
  )
}
 */

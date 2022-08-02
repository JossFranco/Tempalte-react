import React from 'react'
import NavBar from '../../components/molecules/NavBar/NavBar'
import { useState, useEffect } from 'react'
import { Input } from '../../components/atoms/Input/Input'
import { UserService } from '../../services/user.service'
import './Home.css'

export const Home = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
      const dataHome = await UserService.home()
      setBooks(dataHome.items)
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
      <form className="form-search">
        <NavBar />
        <Input
          className="formInput"
          onChange={searcher}
          type="text"
          id="formInput"
          value={search}
          placeholder="🔍 Ej. Angular, React"
          labelMessage="Tus libros"
        />
      </form>
      <section>
        <tbody className="card">
          {results.map((book) => (
            <tr key={book.id}>
              <img alt="" with="10%" height="10%" className="img-book" src={book.image} />
            </tr>
          ))}
        </tbody>
      </section>
    </>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './page/Login/Login'
import { Register } from './page/Register/Register'
import { Home } from './page/Home/Home'
import { useNavigate } from 'react-router-dom'
import { Book } from './Interfaces/interfaces'
import { useState } from 'react'
import { BookInfo } from './page/BookInfo/BookInfo'
import { CreateBook } from './page/CreateBook/CreateBook'
import './App.scss'

export default function App() {
  const navigate = useNavigate()
  const [bookById, setBookById] = useState<Book>({
    id: '',
    public: true,
    author: '',
    resume: '',
    title: '',
    subtitle: '',
    image: '',
    url: '',
    category: {
      id: '',
      description: ''
    },
    userRegister: ''
  })
  const [searchValue, setSearchValue] = useState('')
  const [searchCategoryBook, setSearchCategoryBook] = useState('')
  return (
    <Routes>
      <Route path="/" element={<Login navigateFunction={navigate} />} />
      <Route path="/register" element={<Register navigateFunction={navigate} />} />
      <Route
        path="Home"
        element={
          <Home
            setBookById={setBookById}
            navigateFunction={navigate}
            searchValue={searchValue}
            searchCategoryBook={searchCategoryBook}
            setSearchValue={setSearchValue}
            setSearchCategoryBook={setSearchCategoryBook}
          />
        }
      />
      <Route
        path="/infoBook"
        element={<BookInfo navigateFunction={navigate} bookById={bookById} />}
      />
      <Route path="/newBook" element={<CreateBook navigateFunction={navigate} />} />
    </Routes>
  )
}

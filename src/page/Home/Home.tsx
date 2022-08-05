import React from 'react'
import { NavBar } from '../../components/molecules/NavBar/NavBar'
import { useState, useEffect, FC } from 'react'
import { Search } from '../../components/molecules/Search/Search'
import { Input } from '../../components/atoms/Input/Input'
import { UserService } from '../../services/user.service'
import { Book } from '../../Interfaces/interfaces'
import './Home.scss'
import { TitleBar } from '../../components/molecules/TitleBar/TitleBar'

export interface HomeProps {
  setBookById: (value: Book) => void
  navigateFunction: (value: string) => void
  searchValue: string
  searchCategoryBook: string
  setSearchValue: (value: string) => void
  setSearchCategoryBook: (value: string) => void
}

export const Home: FC<HomeProps> = (props: HomeProps) => {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    if (!props.searchValue && !props.searchCategoryBook) {
      UserService.getAllBooks().then((response) => {
        if (response.items.length > 0) {
          setBooks(response.items)
        }
      })
    } else {
      UserService.getBooksFilter(props.searchValue, props.searchCategoryBook).then((response) => {
        if (response.items.length > 0) {
          setBooks(response.items)
        }
      })
    }
  }, [props.searchCategoryBook, props.searchValue])
  return (
    <>
      <NavBar principalText="Biblioteca" />
      <h1>Tus libros</h1>
      <TitleBar
        navigateFunction={props.navigateFunction}
        text="Tus Libros"
        textButton="Agregar Libro"
        buttonColor="secondary"
        buttonSize="medium"
      ></TitleBar>
      <Search
        setSearchValue={props.setSearchValue}
        setSearchCategoryBook={props.setSearchCategoryBook}
      ></Search>
      <section className="home">
        <section className="home__card">
          {books.map((option: Book, item) => {
            function showBook() {
              UserService.getBook(option.id)
                .then((response) => {
                  props.setBookById(response)
                  props.navigateFunction('/info')
                })
                .catch(() => {})
            }
            return (
              <section key={item} className="home__book" onClick={showBook}>
                <img className="home__item" src={option.image}></img>
                {/* <p className="home__name-book">{option.title}</p>
                <p className="home__subtitle=book">{option.subtitle}</p> */}
              </section>
            )
          })}
        </section>
      </section>
    </>
  )
}

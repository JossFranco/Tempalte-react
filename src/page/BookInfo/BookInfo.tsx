import { NavBar } from '../../components/molecules/NavBar/NavBar'
import { Button } from '../../components/atoms/Button/Button'
import { DataBook } from '../../components/molecules/DataBook/DataBook'
import { Book } from '../../Interfaces/interfaces'
import { FC } from 'react'
import './BookInfo.scss'

export interface BookInfoProps {
  navigateFunction: (value: string) => void
  bookById: Book
}
export const BookInfo: FC<BookInfoProps> = (props: BookInfoProps) => {
  function go() {
    props.navigateFunction('/home')
  }
  return (
    <>
      <NavBar principalText="Biblioteca"></NavBar>
      <div className="buttons">
        <Button size="medium" color="secondary" onClick={go}>
          Volver
        </Button>
        <Button size="medium" color="primary">
          Editar
        </Button>
      </div>
      <section className="infoContainer">
        <div className="imageDiv">
          <img className="imgDetail" src={props.bookById.image}></img>
        </div>
        <div className="dataContainer">
          <DataBook text="Titulo" info={props.bookById.title}></DataBook>
          <DataBook text="Autor" info={props.bookById.author}></DataBook>
          <DataBook text="URL del libro" info={props.bookById.url}></DataBook>
          <DataBook text="Resumen" info={props.bookById.resume}></DataBook>
        </div>
      </section>
    </>
  )
}

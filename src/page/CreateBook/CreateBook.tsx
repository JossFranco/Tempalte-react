import { FC, useState, useEffect } from 'react'
import { Input } from '../../components/atoms/Input/Input'
import { NavBar } from '../../components/molecules/NavBar/NavBar'
import { UserService } from '../../services/user.service'
import { ICategory, Book } from '../../Interfaces/interfaces'
import { CheckBox } from '../../components/atoms/CheckBox/CheckBox'
import { Button } from '../../components/atoms/Button/Button'
import './CreateBook.scss'
export interface CreateBookProps {
  navigateFunction: (value: string) => void
}
export const CreateBook: FC<CreateBookProps> = (props: CreateBookProps) => {
  const [nameBook, setNameBook] = useState('')
  const [urlBook, setUrlBook] = useState('')
  const [resumeBook, setResumeBook] = useState('')
  const [authorBook, setAuthorBook] = useState('')
  const [imageBook, setImageBook] = useState('')
  const [errorNameBook, setErrorNameBook] = useState('')
  const [errorImageBook, setErrorImageBook] = useState('')
  const [categories, setCategories] = useState<ICategory[]>([])
  const [checkedState, setCheckedState] = useState<boolean[]>([])
  const [errorCategories, setErrorCategories] = useState('')
  const [categoriesBook, setCategoriesBook] = useState<string[]>([])
  useEffect(() => {
    UserService.booksByCategory().then((response: ICategory[]) => {
      if (response.length > 0) {
        setCategories(response)
        setCheckedState(new Array(categories.length).fill(false))
      }
    })
  }, [])
  const handleSubmitCancel = () => {
    props.navigateFunction('/home')
  }
  const handleSubmitUpload = async () => {
    try {
      const dataCreateUser = await UserService.createBook(
        nameBook,
        urlBook,
        resumeBook,
        authorBook,
        imageBook,
        categoriesBook
      )
      if (dataCreateUser) {
        alert('REGISTRO CORRECTO')
        props.navigateFunction('/home')
      } else {
        setErrorCategories('Los datos son incorrectos')
      }
    } catch (error) {
      setErrorCategories('Ha ocurrido un error.')
    }
  }

  return (
    <section className="create-book">
      <NavBar principalText="Biblioteca"></NavBar>
      <h2 className="create-book__title">Registro Libro</h2>
      <section className="create-book__container-inputs">
        <div className="create-book__inputs">
          <Input
            placeholder="Ej. Angular + NGRX"
            labelMessage="Nombre del Libro:"
            type="text"
            onChange={(ev) => setNameBook(ev.currentTarget.value)}
            name="nameBook"
            id="nameBook"
            errorMessage={errorNameBook}
          ></Input>
          <Input
            placeholder="Ej. https://book.com"
            labelMessage="URL del Libro:"
            type="text"
            onChange={(ev) => setUrlBook(ev.currentTarget.value)}
            name="urlBook"
            id="urlBook"
          ></Input>
          <Input
            placeholder="Ej. some resume of the book"
            labelMessage="Resumen del Libro:"
            type="textArea"
            onChange={(ev) => setResumeBook(ev.currentTarget.value)}
            name="resumeBook"
            id="resumeBook"
          ></Input>
        </div>
        <div>
          <Input
            placeholder="Ej. somebody"
            labelMessage="Nombre del autor:"
            type="text"
            onChange={(ev) => setAuthorBook(ev.currentTarget.value)}
            name="authorBook"
            id="authorBook"
          ></Input>
          <Input
            placeholder="Ej. https://book.jpeg"
            labelMessage="Imagen de portada:"
            type="text"
            onChange={(ev) => setImageBook(ev.currentTarget.value)}
            name="imageBook"
            id="imageBook"
            errorMessage={errorImageBook}
          ></Input>
        </div>
      </section>
      <h2 className="create-book__title">Categorias</h2>
      <section className="create-book__container-checkbox">
        <CheckBox
          categories={categories}
          setErrorCategories={setErrorCategories}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          setCategoriesBook={setCategoriesBook}
        ></CheckBox>
      </section>
      <span className="create-book__error">{errorCategories}</span>
      <div className="create-book__buttons-container">
        <div className="create-book__button">
          <Button color="secondary" size="medium" onClick={() => handleSubmitCancel()}>
            Cancelar
          </Button>
        </div>
        <div className="create-book__button">
          <Button color="primary" size="medium" onClick={() => handleSubmitUpload()}>
            Registrar
          </Button>
        </div>
      </div>
    </section>
  )
}

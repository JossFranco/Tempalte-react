import Form from './Form'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('Form Login', () => {
  const navigateFuntion = jest.fn()
  const locationFunction = jest.fn()

  it('Render Login', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Form navigateFunction={navigateFuntion} locationFunction={locationFunction} />
      </Router>
    )
    const text = screen.getByText(/Contraseña/i)
    expect(text).toBeInTheDocument()
  })
  /*it('Login', async () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Form navigateFunction={navigateFuntion} locationFunction={locationFunction} />
      </Router>
    )
    const userEmail = screen.getByPlaceholderText('Email')
    const userPassword = screen.getByPlaceholderText('contraseña')
    fireEvent.change(userEmail, { target: { value: 'jossel78@hotmail.com' } })
    fireEvent.change(userPassword, { target: { value: 'Gfh0893882' } })

    const btnLogin = screen.getByText('INGRESAR')

    fireEvent.click(btnLogin)
    await waitFor(() => {
      expect(history.location.pathname).toBe('/Home')
    })
  })*/
})

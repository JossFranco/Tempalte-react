import React from 'react'
import { render, screen } from '@testing-library/react'
import { Login } from '../src/page/Login/Login'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import App from './App'

describe('Router', () => {
  const navigateFunction = jest.fn()
  const locationFunction = jest.fn()
  it('Render Login', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Login navigateFunction={navigateFunction} locationFunction={locationFunction} />
      </Router>
    )
    const textLogin = screen.getByText(/Contraseña/i)
    expect(textLogin).toBeInTheDocument()
  })
})

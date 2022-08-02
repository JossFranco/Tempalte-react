import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Register from './Register'

describe('Register', () => {
  const navigateFuntion = jest.fn()
  const locationFunction = jest.fn()

  it('Render Register', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Register navigateFunction={navigateFuntion} locationFunction={locationFunction} />
      </Router>
    )
    const text = screen.getByText(/Iniciar sesión/i)
    expect(text).toBeInTheDocument()
  })
})

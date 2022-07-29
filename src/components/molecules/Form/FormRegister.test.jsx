import FormRegister from './FormRegister'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('FormRegister', () => {
  const navigateFuntion = jest.fn()
  const locationFunction = jest.fn()

  it('Render Register', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <FormRegister navigateFunction={navigateFuntion} locationFunction={locationFunction} />
      </Router>
    )
    const text = screen.getByText(/Iniciar sesión/i)
    expect(text).toBeInTheDocument()
  })
})

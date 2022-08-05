import { render, screen } from '@testing-library/react'
import { NavBar } from './NavBar'

describe('NavBar component', () => {
  it('should render with text', async () => {
    render(<NavBar principalText="Biblioteca"></NavBar>)
    const TextFound = await screen.findByText('Biblioteca')
    expect(TextFound).toBeDefined()
    expect(TextFound).toBeInTheDocument()
  })
  it('should render with className', async () => {
    render(<NavBar principalText="Biblioteca" />)
    const TextFound = await screen.findByText('Biblioteca')
    expect(TextFound).toHaveClass('header__text')
  })
})

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from './Search'

describe('Search component', () => {
  const setSearchValue = jest.fn()
  const setSearchCategoryBook = jest.fn()
  it('Render Search', async () => {
    render(<Search setSearchValue={setSearchValue} setSearchCategoryBook={setSearchCategoryBook} />)
    const searchFound = await screen.findByPlaceholderText('Ej. Angular, React')
    expect(searchFound).toBeDefined()
    expect(searchFound).toBeInTheDocument()
  })
})

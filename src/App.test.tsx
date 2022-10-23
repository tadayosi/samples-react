import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders app title', () => {
  render(<App />)
  const title = screen.getByText(/Sample React App/i)
  expect(title).toBeInTheDocument()
})

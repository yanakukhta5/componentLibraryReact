import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Tag } from './Tag'

describe('<Tag />', () => {
  test('it should mount', () => {
    render(<Tag />)

    const tag = screen.getByTestId('Tag')

    expect(tag).toBeInTheDocument()
  })
})

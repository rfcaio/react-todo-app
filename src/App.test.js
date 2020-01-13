import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

describe('App', () => {
  afterEach(cleanup)

  describe('on render', () => {
    test('show `Todo` component', () => {
      const { getByTestId } = render(<App />)
      expect(getByTestId('todo')).toBeInTheDocument()
    })
  })
})

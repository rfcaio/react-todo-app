import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

describe('App', () => {
  describe('on render', () => {
    test('show `Todo` component', () => {
      const { getByTestId } = render(<App />)
      expect(getByTestId('todo')).toBeInTheDocument()
    })
  })
})

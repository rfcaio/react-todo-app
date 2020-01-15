import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoForm from './TodoForm'

describe('TodoForm', () => {
  describe('on render', () => {
    test('show `Description` field and `Add todo` button', () => {
      const { getByText } = render(<TodoForm onSubmitForm={() => null} />)
      expect(getByText('Description')).toBeInTheDocument()
      expect(getByText('Add todo')).toBeInTheDocument()
    })
  })

  describe('on submit form', () => {
    test('call `onSubmitForm` function', () => {
      const onSubmitForm = jest.fn()
      const { getByText } = render(<TodoForm onSubmitForm={onSubmitForm} />)
      fireEvent.click(getByText('Add todo'))
      expect(onSubmitForm).toHaveBeenCalled()
    })

    test('clear `Description` field', () => {
      const { getByLabelText, getByText } = render(
        <TodoForm onSubmitForm={() => null} />
      )
      fireEvent.change(getByLabelText('Description'), {
        target: { value: 'Learn JavaScript' }
      })
      expect(getByLabelText('Description')).toHaveValue('Learn JavaScript')
      fireEvent.click(getByText('Add todo'))
      expect(getByLabelText('Description')).toHaveValue('')
    })
  })
})

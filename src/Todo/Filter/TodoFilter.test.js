import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoFilter from './TodoFilter'

describe('TodoFilter', () => {
  describe('on render', () => {
    test('select `Show all` as default', () => {
      const { getByTestId } = render(
        <TodoFilter onChangeFilter={() => null} />
      )
      expect(getByTestId('todo-filter')).toHaveValue('SHOW_ALL')
    })
  })

  describe('on change filter', () => {
    test('call `onChangeFilter` function', () => {
      const onChangeFilter = jest.fn()
      const { getByTestId } = render(
        <TodoFilter onChangeFilter={onChangeFilter} />
      )
      fireEvent.change(getByTestId('todo-filter'), {
        target: { value: 'SHOW_PENDING' }
      })
      expect(onChangeFilter).toHaveBeenCalled()
    })
  })
})

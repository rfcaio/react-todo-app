import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TodoList from './TodoList'

describe('TodoList', () => {
  let todos = null

  beforeEach(() => {
    todos = [
      {
        id: 1,
        description: 'Foo',
        done: false,
      },
      {
        id: 2,
        description: 'Bar',
        done: true,
      },
      {
        id: 3,
        description: 'Tar',
        done: false,
      }
    ]
  })

  describe('on render', () => {
    test('list todos', () => {
      const { getByText } = render(
        <TodoList todos={todos} onToggleDone={() => null} />
      )
      expect(getByText('Foo')).toBeInTheDocument()
      expect(getByText('Bar')).toBeInTheDocument()
      expect(getByText('Tar')).toBeInTheDocument()
    })

    test('mark completed todos', () => {
      const { getByText } = render(
        <TodoList todos={todos} onToggleDone={() => null} />
      )
      expect(getByText('Foo')).not.toHaveClass('todo-list-item-done')
      expect(getByText('Bar')).toHaveClass('todo-list-item-done')
      expect(getByText('Tar')).not.toHaveClass('todo-list-item-done')
    })
  })

  describe('on click todo', () => {
    test('call `onToggleDone` function', () => {
      const onToggleDone = jest.fn()
      const { getByText } = render(
        <TodoList todos={todos} onToggleDone={onToggleDone} />
      )
      fireEvent.click(getByText('Bar'))
      expect(onToggleDone).toHaveBeenCalled()
      expect(onToggleDone).toHaveBeenCalledWith(2)
    })
  })
})

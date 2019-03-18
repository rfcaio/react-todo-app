import React from 'react'

import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class Todo extends React.Component {
  constructor () {
    super()

    this.state = {
      todos: [
        { id: 0, description: 'Learn JavaScript', done: true },
        { id: 1, description: 'Learn CSS', done: true },
        { id: 2, description: 'Learn React', done: false },
        { id: 3, description: 'Learn Haskell', done: false },
        { id: 4, description: 'Learn Python', done: false }
      ],
      filter: 'SHOW_ALL'
    }
  }

  addTodo (description) {
    this.setState(state => {
      let todos = [...state.todos, { id: Date.now(), description, done: false }]
      return { todos }
    })
  }

  changeFilter (event) {
    let filter = event.target.value
    this.setState(() => ({ filter }))
  }

  render () {
    const filterTodos = (todos, filter) => {
      switch (filter) {
        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.done)
        case 'SHOW_PENDING':
          return todos.filter(todo => !todo.done)
        default:
          return todos
      }
    }

    let todos = filterTodos(this.state.todos, this.state.filter)

    return (
      <main>
        <h1>Todo App</h1>
        <div>
          <div>
            <TodoForm onSubmitForm={description => { this.addTodo(description) }} />
            <TodoFilter
              filter={this.state.filter}
              onChangeFilter={event => { this.changeFilter(event) }} />
            <TodoList todos={todos} />
          </div>
        </div>
      </main>
    )
  }
}

export default Todo

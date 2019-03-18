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
      ]
    }
  }

  addTodo (description) {
    this.setState(state => {
      let todos = [...state.todos, { id: Date.now(), description, done: false }]
      return { todos }
    })
  }

  render () {
    return (
      <main>
        <h1>Todo App</h1>
        <div>
          <div>
            <TodoForm onSubmitForm={description => { this.addTodo(description) }} />
            <TodoFilter />
            <TodoList todos={this.state.todos} />
          </div>
        </div>
      </main>
    )
  }
}

export default Todo

import React from 'react'

import TodoList from './TodoList'

class Todo extends React.Component {
  constructor () {
    super()

    this.state = {
      todos: [
        { id: 0, text: 'Learn JavaScript.' },
        { id: 1, text: 'Learn CSS.' },
        { id: 2, text: 'Learn React.' },
        { id: 3, text: 'Learn Haskell.' },
        { id: 4, text: 'Learn Python.' }
      ]
    }
  }

  render () {
    return (
      <main className="container">
        <h1>Todo App</h1>
        <div className="row">
          <div className="col-md-12">
            <TodoList todos={this.state.todos} />
          </div>
        </div>
      </main>
    )
  }
}

export default Todo

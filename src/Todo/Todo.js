import React from 'react'

import TodoFilter from './Filter'
import TodoForm from './Form'
import TodoList from './List'

class Todo extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      filter: 'SHOW_ALL'
    }
  }

  addTodo (description) {
    this.setState(state => {
      const todos = [...state.todos, { id: Date.now(), description, done: false }]
      return { todos }
    })
  }

  changeFilter (event) {
    const filter = event.target.value
    this.setState(() => ({ filter }))
  }

  toggleDone (id) {
    const todos = this.state.todos.map(todo => {
      const { done } = todo
      return todo.id === id ? Object.assign({}, todo, { done: !done }) : todo
    })
    this.setState(() => ({ todos }))
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
    const todos = filterTodos(this.state.todos, this.state.filter)
    return (
      <main data-testid="todo">
        <h1>Todo App</h1>
        <div>
          <div>
            <TodoForm onSubmitForm={description => { this.addTodo(description) }} />
            <TodoFilter
              filter={this.state.filter}
              onChangeFilter={event => { this.changeFilter(event) }} />
            <TodoList todos={todos} onToggleDone={id => { this.toggleDone(id) }} />
          </div>
        </div>
      </main>
    )
  }
}

export default Todo

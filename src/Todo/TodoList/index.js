import React from 'react'

const TodoList = ({ todos, onToggleDone }) => (
  <div>
    {
      todos.map(todo => {
        let { id, description, done } = todo
        return (
          <div key={id} style={{ cursor: 'pointer' }} onClick={() => { onToggleDone(id) }}>
            {done ? <s>{description}</s> : description}
          </div>
        )
      })
    }
  </div>
)

export default TodoList

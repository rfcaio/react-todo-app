import React from 'react'

const TodoList = ({ todos }) => (
  <div>
    {
      todos.map(todo => {
        let { id, description, done } = todo
        return (
          <div key={id}>
            {done ? <s>{description}</s> : description}
          </div>
        )
      })
    }
  </div>
)

export default TodoList

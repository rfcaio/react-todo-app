import React from 'react'

const TodoList = ({ todos }) => (
  <div className="panel panel-default">
    <div className="list-group">
      {
        todos.map(todo => {
          let { id, description, done } = todo
          return (
            <div className="list-group-item" key={id}>
              {done ? <s>{description}</s> : description}
            </div>
          )
        })
      }
    </div>
  </div>
)

export default TodoList

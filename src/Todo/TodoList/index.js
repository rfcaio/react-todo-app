import React from 'react'

const TodoList = ({ todos }) => (
  <div className="panel panel-default">
    <div className="list-group">
      {
        todos.map(
          ({ id, description }) => <div className="list-group-item" key={id}>{description}</div>
        )
      }
    </div>
  </div>
)

export default TodoList

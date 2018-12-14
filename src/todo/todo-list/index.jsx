import React from 'react'

const TodoList = ({ todos }) => (
  <div className="panel panel-default">
    <div className="list-group">
      {
        todos.map(
          ({ id, text }) => <div className="list-group-item" key={id}>{text}</div>
        )
      }
    </div>
  </div>
)

export default TodoList

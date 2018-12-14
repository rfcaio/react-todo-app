import React from 'react'

const TodoList = ({ todos }) => (
  <div class="panel panel-default">
    <div class="list-group">
      {
        todos.map(
          ({ id, text }) => <div class="list-group-item" key={id}>{text}</div>
        )
      }
    </div>
  </div>
)

export default TodoList

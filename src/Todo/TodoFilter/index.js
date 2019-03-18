import React from 'react'

const TodoFilter = ({ filter }) => (
  <select value={filter}>
    <option value="SHOW_ALL">Show all</option>
    <option value="SHOW_COMPLETED">Show completed</option>
    <option value="SHOW_PENDING">Show pending</option>
  </select>
)

export default TodoFilter

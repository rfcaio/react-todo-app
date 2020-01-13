import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  todos: PropTypes.array,
  onToggleDone: PropTypes.func.isRequired
}

const defaultProps = {
  todos: []
}

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

TodoList.propTypes = propTypes
TodoList.defaultProps = defaultProps

export default TodoList

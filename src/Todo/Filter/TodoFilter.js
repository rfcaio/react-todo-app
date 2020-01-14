import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired
}

const defaultProps = {
  filter: 'SHOW_ALL'
}

const TodoFilter = ({ filter, onChangeFilter }) => (
  <select
    data-testid="todo-filter"
    value={filter}
    onChange={event => { onChangeFilter(event) }}
  >
    <option value="SHOW_ALL">Show all</option>
    <option value="SHOW_COMPLETED">Show completed</option>
    <option value="SHOW_PENDING">Show pending</option>
  </select>
)

TodoFilter.propTypes = propTypes
TodoFilter.defaultProps = defaultProps

export default TodoFilter

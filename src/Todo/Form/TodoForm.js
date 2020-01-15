import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onSubmitForm: PropTypes.func.isRequired
}

const defaultProps = {}

class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { description: '' }
  }

  onChangeInput (event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmitForm (event) {
    event.preventDefault()
    this.props.onSubmitForm(this.state.description)
    this.setState(() => ({ description: '' }))
  }

  render () {
    const { description } = this.state
    return (
      <form onSubmit={event => { this.onSubmitForm(event) }}>
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={event => { this.onChangeInput(event) }} />
        <input type="submit" value="Add todo" />
      </form>
    )
  }
}

TodoForm.propTypes = propTypes
TodoForm.defaultProps = defaultProps

export default TodoForm

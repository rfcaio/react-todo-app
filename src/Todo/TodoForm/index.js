import React from 'react'

class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { description: '' }
  }

  onChangeInput (event) {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmitForm (event) {
    event.preventDefault()
    this.setState(state => {
      console.log(state)
      return { description: '' }
    })
  }

  render () {
    let { description } = this.state
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

export default TodoForm

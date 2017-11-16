import React, { Component } from 'react'

class CreateTodo extends Component {

  state = { input: "" }

  handleChange = (ev) => {
    this.setState({input: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch(this.createToDo(this.state.input))
    this.setState({input: ""})
  }

  createToDo = (info) => (
    {type: "ADD_TODO", payload: info}
  )

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.input} onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
        {this.props.store.getState().todos}
      </div>
    )
  }
}

export default CreateTodo;

import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
 constructor(props) {
   super(props)
   this.state = {task: ''}
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
 }

 // Acompanhando dados do input
 handleChange(evt) {
  this.setState({
    [evt.target.name]: evt.target.value
  })
 }

 // Lidando com os novos dados do form
 handleSubmit(evt){
   evt.preventDefault()
   // Passando state para o comp pai como objeto junto com um id
   this.props.createTodo({...this.state, id: uuid()})
   // Limpando o state
   this.setState({ task: ''})
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>New Todo</label>
        <input
        type='text'
        placeholder='New todo'
        id='task'
        name='task'
        value={this.state.task}
        onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;
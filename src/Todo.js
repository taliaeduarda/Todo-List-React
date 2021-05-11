import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, task:  this.props.task };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  // Funcionalidade do botão editar, altera entre falso e verdadeiro
  toggleForm(){
    this.setState({ isEditing: !this.state.isEditing })
  }

  // Atualiza o valor do input
  handleUpdate(evt){
    evt.preventDefault()
    // Captura dados da nova task e passa para o comp pai
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  // Acompanha os dados do input
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.task} name='task' onChange={this.handleChange} />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}

export default Todo;

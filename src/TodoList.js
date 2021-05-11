import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {todos: []}
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
  }

  // Adicionando todos do componente filho no state
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
    // Agora é só passar como props pro NewTodoForm, ln 35
  }

  // Removendo tasks através da id
  remove(id){
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id) // retorna uma nova array sem aquela task 
    })
  }
  
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo 
      key={todo.id} 
      id={todo.id}
      task={todo.task} 
      removeTodo={this.remove} /> // renderiza as tasks que foram passadas como props para o comp
    })
    return (
      <div>
        <h1>Todo List!</h1> 
        <NewTodoForm createTodo={this.create}/> 
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default TodoList;
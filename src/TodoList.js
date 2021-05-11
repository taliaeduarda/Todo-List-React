import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {todos: []}
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
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

  // Atualizando a task 
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        // mantem o todo mas atualiza a task
        return {...todo, task: updatedTask}
      }
        // se não ele retorna o todo sem modificações
        return todo;
    })
    this.setState({todos: updatedTodos})
  }
  
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo 
      key={todo.id} 
      id={todo.id}
      task={todo.task} 
      removeTodo={this.remove}
      updateTodo={this.update} /> // renderiza as tasks que foram passadas como props para o comp
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
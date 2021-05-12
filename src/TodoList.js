import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }

  // Adicionando todos do componente filho no state
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
    // Agora é só passar como props pro NewTodoForm, ln 35
  }

  // Removendo tasks através da id
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id), // retorna uma nova array sem aquela task
    });
  }

  // Atualizando a task
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        // mantem o todo mas atualiza a task
        return { ...todo, task: updatedTask };
      }
      // se não ele retorna o todo sem modificações
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  // Adiciona a classe completed
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        // mantem o todo mas atualiza a task
        return { ...todo, completed: !todo.completed };
      }
      // se não ele retorna o todo sem modificações
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      ); // renderiza as tasks que foram passadas como props para o comp
    });
    return (
      <div className="TodoList">
        <h1>Todo List!<span>A Simple React Todo List App.</span></h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;

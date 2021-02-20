import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// data
import { todos } from './todos.json';
// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  //vamos a escribir un metodo que se encargue de agregar las nuevas tareas 

  //Recibe una tarea como parámetro
  //Vamos a actualizar el estado de las tareas agregando esta nueva tarea que esta llegamdo

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  //Fliter ---metodo que recorre uno a uno los elementos del array y si un dato no cumple con una condicion, no
  //lo agrega al nuevo arreglo que se va a generar

  removeTodo(index){
    if (window.confirm('Are you sure you want to delete it?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <button className="btn btn-primary">
                {todo.priority}
              </button>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
              Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            task
            <span className="badge badge-pill badge-light ml-2">
              { this.state.todos.length }
            </span>
          </a>
        </nav>        
        <div className="container">
          <div className="row mt-4">           
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>-
        </div>
      </div>
    );
  }
}

export default App;






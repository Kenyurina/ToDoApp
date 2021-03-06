import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// data
// subcomponents
import {db} from './firebase'
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  //vamos a escribir un metodo que se encargue de agregar las nuevas tareas 

  //Recibe una tarea como parámetro
  //Vamos a actualizar el estado de las tareas agregando esta nueva tarea que esta llegamdo

  async getTodos() {
    db.collection('todos').onSnapshot( ( querySnapshot ) => {
      querySnapshot.forEach( doc => { console.log( doc.data() ) } );
      console.log("Componetne Montado");
    } );
  }

  componentDidMount() {
    this.getTodos()
  }

  async handleAddTodo(datos){
    await db.collection('todos').doc().set(datos);
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

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            <span className="badge badge-pill badge-light ml-2">
              <h2>Logo</h2>
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
                <h1>Tareas</h1>
              </div>
            </div>
          </div>-
        </div>
      </div>
    );
  }
}

export default App;






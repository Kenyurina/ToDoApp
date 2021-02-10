import React, { Component } from 'react';

class TodoForm extends Component {
    constructor () {
        super();
        this.state = {
            title: '',
            Responsible: '',
            description: '',
            priority: 'low'
        }; 
        this.handleInput = this.handleInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    } 

    //e.target.value  ---obtengo el valor de lo que se esta escribiendo
    //e.target.name  ---saber que input es el que lo esta escribiendo
    //this.setState ---este evento será el encargado de que podamos alterar los datos en los campos del estado
    //e.preventDefault ---este evento evita que se refresque la pagina

    handleInput(e){
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending the data...');
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            //con este evento le decimos que cuando el texto cambie dentro del input vamos a ejecutar algo
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsible"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            onChange={this.handleInput}
                            >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}
export default TodoForm;


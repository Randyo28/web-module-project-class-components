import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state ={
            todoText: ""
        }
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({
            todoText: ""
        })
    }


    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type="text" 
                    name= 'todoText' 
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                    />
                   <button>Add Todo</button>
               </form> 
            </div>
        );
    }
}

export default TodoForm;
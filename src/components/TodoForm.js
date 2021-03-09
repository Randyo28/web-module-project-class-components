import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            todoText: ''
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
            todoText: ''
        })
        console.log([e.target.name], e.target.value)
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type="text" 
                    name= 'todoText' 
                    value={this.state.itemText}
                    onChange={this.handleChanges}
                    />
                   <button>Add Todo</button>
               </form> 
            </div>
        );
    }
}

export default TodoForm;
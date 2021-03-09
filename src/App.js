import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';


const todo = [
  {
  task: 'Walk dogs',
  id: new Date(),
  completed: false
},
{
  task: 'Wash Car',
  id: new Date(),
  completed: false
}
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
    }
  }

  toggleItem = (clickedOnId) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === clickedOnId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addTodo = (itemName) => {
    const newTodo = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo],
    });
  };

  removeItem = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
          return item.completed !== true
      })
    })
  }
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addTodo={this.addTodo}
        />
        <TodoList  
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          removeItem={this.removeItem}
          />
      </div>
    );
  }
}

export default App;

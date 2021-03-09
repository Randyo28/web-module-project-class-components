// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

        return (
            <div>
               {props.todo.map(todo => (
                       <Todo 
                            key={todo.id} 
                            toggleItem={props.toggleItem} 
                            todo={todo}/>
               ))}
               <button onClick={props.removeItem}>Clear List</button>
            </div>
        );
    }

export default TodoList;
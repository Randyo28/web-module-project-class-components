import React from 'react';

const Todo = (props) => {


    return (
        <div
            onClick={() => props.toggleItem(props.item.id)}
            className='item'
        >
            <h2>{props.todos.task}</h2>
        </div>
    );
};

export default Todo;
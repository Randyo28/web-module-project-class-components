import React from 'react';

const Todo = (props) => {


    return (
        <div
            onClick={() => props.toggleItem(props.todo.id)}
            className={`todo${props.todo.completed ? " completed" : ""}`}
            // {`item${props.item.completed ? "completed" : ""}`}
        >
            <h2>{props.todo.task}</h2>
        </div>
    );
};

export default Todo;
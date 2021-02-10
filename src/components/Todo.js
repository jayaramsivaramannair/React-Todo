import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        //Below class will be condionally applied 
        <div className = {!props.item.completed ? 'notCompleted' : 'completed'}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;
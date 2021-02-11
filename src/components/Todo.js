import React from 'react';
import './Todo.css';

const Todo = (props) => {
    const checkFunction = () => {
        props.toggleStrike(props.item.id);
    }
    return (
        //Below class will be condionally applied 
        <div className = {!props.item.completed ? 'notCompleted' : 'completed'}>
            <p onClick={checkFunction} className="p-1">{props.item.task}</p>
        </div>
    )
}

export default Todo;
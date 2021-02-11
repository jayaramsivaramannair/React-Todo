// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
    
    return (
        <div className="self-center border-2 rounded border-double border-pink-900">
            <ul>
            {props.tasks.map(item => {
                return <Todo key = {item.id} item={item} toggleStrike = {props.toggleStrike}/>
            })}
            </ul>
        </div>
    )
}

export default TodoList;

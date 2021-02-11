import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import './App.css';


const myTasks = [
  {
    task: 'Organized Garage',
    id : 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  }, 
  {
    task: 'Painting House',
    id: Date.now(),
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: myTasks,
    };
  }

  toggleStrikeFunction = (taskID) => {
    const newTaskList = this.state.tasks.map(task => {
      if(taskID === task.id) {
        return({...task, completed : !task.completed});
      } else {
        return task;
      }
    })
    this.setState({...this.state, tasks : newTaskList});
  }

  addItem = (newTask) => {
    const newTaskObj = {
      task : newTask,
      id : Date.now(),
      completed: false
    }
    this.setState({...this.state, tasks : [...this.state.tasks, newTaskObj]})
  }

  render() {
    return (
      <div>
        <h2>My Todo App!</h2>
        <TodoForm addItem = {this.addItem}/>
        <h4>Below are the tasks on my list:</h4>
        <TodoList tasks = {this.state.tasks} toggleStrike = {this.toggleStrikeFunction}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import './App.css';


const myTasks = [ 
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

  clearItem = () => {
    const updatedArray = this.state.tasks.filter(item => {
      if(!item.completed) {
        return item;
      }
      return "";
    })
    this.setState({...this.state, tasks : updatedArray});
  }

  render() {
    return (
      <div className="container mx-auto md flex flex-col items-start justify-evenly m-2">
        <h1 className="font-bold self-center tracking-wide font-black text-4xl m-3">My Todo App</h1>
        <TodoForm addItem = {this.addItem} clearItem = {this.clearItem}/>
        <h4 className="self-center font-black">Tasks currently on my list:</h4>
        <TodoList tasks = {this.state.tasks} toggleStrike = {this.toggleStrikeFunction}/>
      </div>
    );
  }
}

export default App;

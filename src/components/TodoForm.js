import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue : " ",
        }
    }

    captureInput = (evt) => {
        this.setState({...this.state, inputValue : evt.target.value});
        console.log(evt.target.value);
    }

    addNewItem = (evt) => {
        evt.preventDefault();
        this.props.addItem(this.state.inputValue);
        this.setState({...this.state, inputValue : " "});
    }
    
    render() {
        return(
            <div>
                Hello from Form!
                <form>
                    <input name="inputValue" value={this.state.inputValue} onChange={this.captureInput}/>
                    <button onClick = {this.addNewItem}>Add To-Do Item</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
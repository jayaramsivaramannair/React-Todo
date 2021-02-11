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
                <form onSubmit={this.addNewItem}>
                    <input name="inputValue" value={this.state.inputValue} onChange={this.captureInput}/>
                    <button>Add To-Do Item</button>
                </form>
                <button onClick={this.props.clearItem}>Clear Checked Item</button>
            </div>
        )
    }
}

export default TodoForm;
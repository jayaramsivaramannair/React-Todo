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
            <div className="flex flex-col m-2">
                <form onSubmit={this.addNewItem} className="flex flex-col m-3 border-2 rounded border-double border-pink-900 p-6">
                    <input name="inputValue" value={this.state.inputValue} onChange={this.captureInput}/>
                    <button className="text-sm border-2 rounded border-double border-pink-900 text-indigo-400 bg-pink-900 m-2">Add To-Do Item</button>
                </form>
                <button onClick={this.props.clearItem} className=" text-sm self-center border-2 rounded border-double border-pink-900 text-indigo-400 bg-pink-900">Clear Checked Item</button>
            </div>
        )
    }
}

export default TodoForm;
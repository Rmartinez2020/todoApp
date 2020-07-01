// === Dependencies ===
import React from 'react';
import shortid from 'shortid';

class TodoForm extends React.Component {
    /* Set up initial state */
    state = {
        text: ""
    };
    /* create on change function that will change the state */
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    /* create function for submitting the form */
    handleSubmit = (event) => {
        event.preventDefault();
        /* submit a new todo */
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false,
        });
        this.setState({
            text: ""
        })
    };
    /* create an input to add todos */
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="To-Do..." />
                <button onClick={this.handleSubmit}>Add To-Do</button>
            </form>
        )
    }
}

export default TodoForm;
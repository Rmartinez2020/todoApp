// === Dependencies ===
import React from 'react';
import TodoForm from './TodoForm';

class Todo extends React.Component {
    /* Set up initial state */
    state = {
        todos: []
    };
    /* create function that adds to the todos array */
    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    }
    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
            </div>
        )
    }
}

export default Todo;
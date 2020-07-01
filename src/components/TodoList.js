// === Dependencies ===
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component {

    /* Set up initial state */
    state = {
        todos: []
    };

    /* create function that adds to the todos array */
    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    /* create function to mark todos as complete */
    toggleStatus = id => {
        this.setState({
            todos: this.state.todos.map(todo =>{
                if(todo.id === id){
                    return {
                        text: todo.text,
                        id:todo.id,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                };
            })
        });
    };

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {/* display number of active todos */}
                <div>Todos Left: {this.state.todos.filter(todo => !todo.complete).length}</div>
                {/* map over todos in the state to display all to page */}
                {this.state.todos.map(todo => { return <Todo key={todo.id} toggleStatus={() => this.toggleStatus(todo.id)} todo={todo} />})}
            </div>
        )
    }
}

export default TodoList;
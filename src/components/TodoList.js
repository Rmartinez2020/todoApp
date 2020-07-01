// === Dependencies ===
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component {

    /* Set up initial state */
    state = {
        todos: [],
        displayed: "all"
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
            todos: this.state.todos.map(todo => {
                /*check for the todo that needs to be changed to complete */
                if (todo.id === id) {
                    return {
                        text: todo.text,
                        id: todo.id,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                };
            })
        });
    };

    /* create function that will delete a todo */
    deleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !==id)
        })
    }

    /* create function that will change the state of displayed */
    changeDisplayed = (str) => {
        this.setState({
            displayed: str
        });
    };

    render() {

        let todos = [];
        /* check which todos need to be displayed */
        switch (this.state.displayed) {
            case "all":
                todos = this.state.todos;
                break;
            case "active":
                todos = this.state.todos.filter(todo => !todo.complete)
                break;
            case "completed":
                todos = this.state.todos.filter(todo => todo.complete)
                break;
            default:
                console.log("error processing content to display.")
                break;
        }

        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {/* display number of active todos */}
                <div>Todos Left: {this.state.todos.filter(todo => !todo.complete).length}</div>
                {/* change the content that will be displayed by clicking on buttons */}
                <div>
                    <button onClick={() => this.changeDisplayed("all")} >All</button>
                    <button onClick={() => this.changeDisplayed("active")} >Active</button>
                    <button onClick={() => this.changeDisplayed("completed")} >Completed</button>
                </div>
                {/* map over todos in the state to display to page */}
                {todos.map(todo => {
                    return <Todo
                        key={todo.id}
                        toggleStatus={() => this.toggleStatus(todo.id)}
                        todo={todo}
                        delete={() => this.deleteTodo(todo.id)} />
                })}
            </div>
        )
    }
}

export default TodoList;
// === Dependencies ===
import React from 'react';

function Todo(props) {
    return (
        <li className="list-group-item text-center">
            <div
                style={{
                    textDecoration: props.todo.complete ? "line-through" : ""
                }}
                className="float-left"
                onClick={props.toggleStatus}
            >{props.todo.text}</div>
            <button className="btn btn-danger ml-2 float-right" onClick={props.delete}>X</button>
        </li>
    )
}

export default Todo;
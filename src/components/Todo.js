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
            >{props.todo.text}</div>
            <button className="btn btn-danger ml-2 float-right" onClick={props.delete}>X</button>
            <button className="btn float-right" onClick={props.toggleStatus}><i class="far fa-check-square fa-2x"></i></button>
        </li>
    )
}

export default Todo;
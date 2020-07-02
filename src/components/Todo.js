// === Dependencies ===
import React from 'react';

function Todo(props) {
    return (
        <div>
            <div
                style={{
                    textDecoration: props.todo.complete ? "line-through" : ""
                }}
                onClick={props.toggleStatus}
            >{props.todo.text}</div>
            <button className="m-2" onClick={props.delete}>X</button>
        </div>
    )
}

export default Todo;